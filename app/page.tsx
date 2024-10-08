import Image from "next/image";
import ModelViewer from "../components/modelviewer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-transparent">
      <h1>3D Model Viewer</h1>
      <ModelViewer fbxUrl="/models/modelone.fbx" />
    </div>
  );
}
