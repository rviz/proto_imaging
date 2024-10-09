import Image from "next/image";
import ModelViewer from "../components/modelviewer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-transparent">
      <h1 className="mt-10 text-3xl">Virtual Reality</h1>
      <ModelViewer fbxUrl="/models/modelone.fbx" />
      <a
        href="https://view.genially.com/669c0d9d9c64fa04779654a2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mb-10 text-3xl">Iniciar</button>
      </a>
    </div>
  );
}
