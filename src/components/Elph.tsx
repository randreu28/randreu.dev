/*
Model by: https://market.pmnd.rs/model/korrigan-taning
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Femme: THREE.SkinnedMesh;
    root: THREE.Bone;
  };
  materials: {
    ["color_main.004"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF("/elph.gltf") as GLTFResult;
  const { actions } = useAnimations(animations, group); //TODO: Figure out how to properly type this. (Docs are outdated)

  useEffect(() => {
    actions["pose_femme"]?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature_femme"
          rotation={[0.12, -0.06, -0.04]}
          scale={0.15}
        >
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Femme"
            geometry={nodes.Femme.geometry}
            material={materials["color_main.004"]}
            skeleton={nodes.Femme.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/elph.gltf");
