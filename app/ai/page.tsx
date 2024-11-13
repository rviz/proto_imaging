import Image from "next/image";
import ModelViewer from "../../components/modelviewerAI";

export default function Ai() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="z-10 top-[2%] absolute w-3/5 flex flex-col items-center justify-center bg-transparent  p-10 rounded-lg">
        <h1 className="text-[150px] text-geniallyblue-100 font-extrabold">
          ARTIFICIAL
        </h1>
        <h1 className="absolute mt-[300px] text-[115px] text-geniallyblue-100 font-bold">
          INTELLIGENCE
        </h1>
      </div>

      <ModelViewer fbxUrl="/models/modelai.fbx" />

      <a
        className="z-10 bottom-[17%] absolute  group inline-block rounded bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://view.genially.com/669c0d9d9c64fa04779654a2"
      >
        <span className="block rounded-sm bg-geniallyblue-100 px-24 py-10 text-[40px] group-hover:bg-transparent text-white font-bold">
          Click aquí para iniciar
        </span>
      </a>
      <Image
        src="/logomostla.png"
        alt="logo de mostla"
        width={200}
        height={200}
        className="bottom-[10%] absolute"
      ></Image>
    </div>
  );
}
