"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three-stdlib";

const ModelViewer = ({ fbxUrl }) => {
  const modelRef = useRef();
  console.log("ModelViewer is rendering with fbxUrl:", fbxUrl);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = new FBXLoader();

      console.log("Starting to load FBX model...");

      loader.load(
        fbxUrl,
        (fbx) => {
          console.log("FBX model loaded:", fbx);
          fbx.scale.set(1, 1, 1);

          modelRef.current.add(fbx);
        },
        undefined,
        (error) => {
          console.error("Error loading FBX model:", error);
        }
      );
    }, 100); // Adjust time as necessary

    return () => clearTimeout(timer); // Cleanup the timer
  }, [fbxUrl]);

  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 120 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={<div>Loading model...</div>}>
        <group ref={modelRef} />
      </Suspense>

      {/* <OrbitControls enableZoom={true} /> */}
    </Canvas>
  );
};

export default ModelViewer;
