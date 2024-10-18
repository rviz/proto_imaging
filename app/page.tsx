import Image from "next/image";
import ModelViewer from "../components/modelviewer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="z-10 top-[2%] absolute w-3/5 flex flex-col items-center justify-center bg-transparent  p-10 rounded-lg">
        <h1 className="text-6xl text-geniallyblue-100 font-semibold">
          VIRTUAL
        </h1>
        <h1 className="text-6xl text-geniallyblue-100 font-semibold">
          REALITY
        </h1>
      </div>

      <ModelViewer fbxUrl="/models/modelone.fbx" />

      <a
        className="z-10 bottom-[2%] absolute mb-10 group inline-block rounded bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://view.genially.com/669c0d9d9c64fa04779654a2"
      >
        <span className="block rounded-sm bg-geniallyblue-100 px-12 py-3 text-xl font-medium group-hover:bg-transparent">
          Iniciar
        </span>
      </a>
    </div>
  );
}
