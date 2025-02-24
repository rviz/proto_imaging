import Image from "next/image";
import ModelViewer from "../../../components/modelviewerAI";

export default function Ai() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="z-10 top-[2%] absolute w-3/5 flex flex-col items-center justify-center bg-transparent  p-10 rounded-lg">
        <h1 className="text-[150px] text-mostlablue-100 font-extrabold">
          ARTIFICIAL
        </h1>
        <h1 className="absolute mt-[300px] text-[115px] text-mostlablue-100 font-bold">
          INTELLIGENCE
        </h1>
      </div>

      <ModelViewer glbUrl="/models/ai.glb" />

      <a
        className="z-10 w-screen bottom-[19%] absolute  group inline-block bg-gradient-to-r bg-mostlablue-100 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://view.genially.com/672267e346ead3cf0bb168b7"
      >
        <span className="flex items-center rounded-sm bg-mostlablue-100 w-full py-12 text-[40px] group-hover:bg-transparent text-white font-bold">
          <div className="absolute left-[20px]">
            <Image
              src="/rocket2-32.png"
              alt="rocket icon"
              width={32}
              height={32}
            />
          </div>
          <div className="absolute left-[80px]">Click here to start</div>
        </span>
      </a>
      <Image
        src="/logomostlan.png"
        alt="logo de mostla"
        width={400}
        height={400}
        className="bottom-[7%] absolute"
      ></Image>
    </div>
  );
}
