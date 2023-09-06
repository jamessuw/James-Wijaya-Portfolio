import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

function Blob() {
  const mesh = useRef();
  const hover = useRef(false);
  const shouldCastShadow = useMemo(() => Math.random() < 8.5, []);
  const shouldReceiveShadow = useMemo(() => Math.random() < 8.5, []); // Random value for receiveShadow

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.x += 0.004; // Adjust the rotation speed here
      mesh.current.rotation.y += 0.003; // Adjust the rotation speed here


      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });
  return (
    <mesh
      ref={mesh}
      scale={1.8}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      castShadow={shouldCastShadow} 
      receiveShadow={shouldReceiveShadow}
      
    >
      <icosahedronGeometry args={[2, 20]} />
      <meshStandardMaterial />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default Blob;
