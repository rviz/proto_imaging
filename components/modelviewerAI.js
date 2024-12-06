"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// Child component that uses R3F hooks must be inside Canvas
function Model({ glbUrl }) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF(glbUrl);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    // If the model has animations, play the first one by default
    if (actions && Object.keys(actions).length > 0) {
      const defaultActionName = Object.keys(actions)[0];
      actions[defaultActionName].play();
    }
  }, [actions]);

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
}

const ModelViewer = ({ glbUrl }) => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 120 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={"Loading model..."}>
        <Model glbUrl={glbUrl} />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
