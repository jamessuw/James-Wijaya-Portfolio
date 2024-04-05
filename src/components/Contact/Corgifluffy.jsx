import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/corgifluffy.glb');
  const { actions } = useAnimations(animations, group);





  useEffect(() => {
    const animationClip = animations[0];
    const action = actions[animationClip.name];
    if (action) {
      action.play();
    }
  }, [animations, actions]);

  // Adjust scale to make the object larger
  const scale = 49; // Change this value to make the object larger or smaller

  return (
    <group ref={group} {...props} dispose={null} scale={[scale, scale, scale]}>
      <group name="Scene">
        <group name="skeleton_#0" receiveShadow castShadow>
          <primitive object={nodes.Bip001} />
          <group name="Default_light" />
          <skinnedMesh
            name="Welshcorgi"
            geometry={nodes.Welshcorgi.geometry}
            material={materials.Welshcorgi}
            skeleton={nodes.Welshcorgi.skeleton}
            receiveShadow
            castShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/corgifluffy.glb');
