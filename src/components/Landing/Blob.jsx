import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { DirectionalLight } from "three";
import * as THREE from 'three'; // Import the THREE library
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

function Blob() {
  const mesh = useRef();
  const hover = useRef(false);
  const shouldCastShadow = useMemo(() => Math.random() < 8.5, []);
  const shouldReceiveShadow = useMemo(() => Math.random() < 8.5, []);

  // Set up your scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  // Set up lights
  const lightTop = new DirectionalLight(0xFFFFFF, 0.5);
  lightTop.position.set(0, 200, 200);
  lightTop.castShadow = true;
  scene.add(lightTop);

  const lightBottom = new DirectionalLight(0xFFFFFF, 0.15);
  lightBottom.position.set(0, -200, 400);
  lightBottom.castShadow = true;
  scene.add(lightBottom);

  // ...

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
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
        castShadow={shouldCastShadow}
        receiveShadow={shouldReceiveShadow}
        style={{ pointerEvents: "none" }}
      >
        <icosahedronGeometry args={[2, 20]} />
        <meshPhongMaterial />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        position={[0, 0, -5]}
        onPointerOver={(event) => {
          event.stopPropagation();
          hover.current = true;
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          hover.current = false;
        }}
        scale={[2.2, 2.2, 2.2]}
      >
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
  
    </group>


  );
}

export default Blob;
