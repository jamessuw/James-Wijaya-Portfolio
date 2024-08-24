import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector2, DirectionalLight, Color } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

function Blob() {
  const mesh = useRef();
  const { camera, scene } = useThree();
  const [dragging, setDragging] = useState(false);
  const [prevPosition, setPrevPosition] = useState(new Vector2());

  const handlePointerDown = (event) => {
    event.stopPropagation();
    setDragging(true);
    setPrevPosition(new Vector2(event.clientX, event.clientY));
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    if (dragging) {
      const delta = new Vector2(
        event.clientX - prevPosition.x,
        event.clientY - prevPosition.y
      );
      setPrevPosition(new Vector2(event.clientX, event.clientY));
      camera.position.x -= delta.x * 0.01;
      camera.position.y += delta.y * 0.01;
      camera.lookAt(0, 0, 0);
    }
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const hover = useRef(false);
  const shouldCastShadow = useMemo(() => Math.random() < 0.85, []);
  const shouldReceiveShadow = useMemo(() => Math.random() < 0.85, []);

  // Setup lights
  const lightTop = useMemo(() => {
    const light = new DirectionalLight(0xffffff, 4.0);
    light.position.set(0, 200, 200);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.bias = -0.001;
    return light;
  }, []);

  const lightBottom = useMemo(() => {
    const light = new DirectionalLight(0xffffff, 4.5);
    light.position.set(0, -200, 400);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.bias = -0.001;
    return light;
  }, []);

  // Add lights to the scene
  useEffect(() => {
    scene.add(lightTop);
    scene.add(lightBottom);
    return () => {
      scene.remove(lightTop);
      scene.remove(lightBottom);
    };
  }, [scene, lightTop, lightBottom]);

  const uniforms = useMemo(() => ({
    u_intensity: { value: 1.0 },
    u_amplitude: { value: 1.0 },
    u_color: { value: new Color('black') },
    gridSize: { value: 0 },
    gridColor: { value: new Color(1.0, 1.0, 1.0) },
    gridThickness: { value: 10.02 },
    u_frequency: { value: 8.0 },
    u_time: { value: 0.0 },
    u_lightPosition: { value: lightTop.position },
    u_viewPosition: { value: camera.position },
  }), [lightTop.position, camera.position]);

  useFrame((state) => {
    const { clock } = state;
    uniforms.u_frequency.value = Math.sin(clock.getElapsedTime()) * 3.0 + 4.0;
    uniforms.u_time.value = 0.4 * clock.getElapsedTime();
  
    if (mesh.current) {
      mesh.current.rotation.x += 0.004;
      mesh.current.rotation.y += 0.003;
  
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
  
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
  
      mesh.current.material.uniforms.u_amplitude.value = hover.current ? 6.0 : 4.0;
  
      mesh.current.material.uniforms.u_color.value = hover.current ? new Color(0x00ff00) : new Color(0xff0000);
      
      // Update light and camera positions
      uniforms.u_lightPosition.value.copy(lightTop.position);
      uniforms.u_viewPosition.value.copy(camera.position);
    }
  });
  
  return (
    <group>
      <mesh
        ref={mesh}
        scale={1.8}
        position={[0, 0, 0]}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        castShadow={shouldCastShadow}
        receiveShadow={shouldReceiveShadow}
        style={{ pointerEvents: "auto" }}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
}

export default Blob;
