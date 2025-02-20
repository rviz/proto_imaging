"use client";
import { Suspense, useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ glbUrl }) {
  const groupRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(glbUrl, (gltf) => {
      const model = gltf.scene;
      model.scale.set(1.9, 1.9, 1.9);
      model.position.set(0, -1, 0);
      groupRef.current.add(model);

      // Debug materials
      model.traverse((child) => {
        if (child.isMesh) {
          console.log(child.material);
        }
      });
    });
  }, [glbUrl]);

  return <group ref={groupRef} />;
}

const ModelViewer = ({ glbUrl }) => {
  return (
    <Canvas camera={{ position: [2, 1, 3], fov: 120 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 4]} intensity={1.5} />

      <Suspense fallback={"Loading model..."}>
        <Model glbUrl={glbUrl} />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
