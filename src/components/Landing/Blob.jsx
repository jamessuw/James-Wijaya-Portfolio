import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector2 } from "three";
import { DirectionalLight } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

// Import THREE namespace
import * as THREE from 'three';

function Blob() {
  const mesh = useRef();
  const { camera } = useThree();
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
  const shouldCastShadow = useMemo(() => Math.random() < 8.5, []);
  const shouldReceiveShadow = useMemo(() => Math.random() < 8.5, []);

  // Set up lights
  const lightTop = new DirectionalLight(0xFFFFFF, 0.5);
  lightTop.position.set(0, 200, 200);
  lightTop.castShadow = true;
  const lightBottom = new DirectionalLight(0xFFFFFF, 0.15);
  lightBottom.position.set(0, -200, 400);
  lightBottom.castShadow = true;

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
      u_color: { value: new THREE.Color(0xff0000) }, // Add a color uniform
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.x += 0.004;
      mesh.current.rotation.y += 0.003;

      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );

      // Change color when hovered over
      mesh.current.material.uniforms.u_color.value = hover.current ? new THREE.Color(0x00ff00) : new THREE.Color(0xff0000);
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
        <meshPhongMaterial />
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
