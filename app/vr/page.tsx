import Image from "next/image";
import ModelViewer from "../../components/modelviewerVR";

export default function Vr() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="z-10 top-[2%] absolute w-3/5 flex flex-col items-center justify-center bg-transparent  p-10 rounded-lg">
        <h1 className="text-[150px] text-geniallyblue-100 font-extrabold">
          VIRTUAL
        </h1>
        <h1 className="absolute mt-[300px] text-[150px] text-geniallyblue-100 font-bold">
          REALITY
        </h1>
      </div>

      <ModelViewer glbUrl="/models/vr2.glb" />

      <a
        className="z-10 w-screen bottom-[19%] absolute  group inline-block rounded bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://view.genially.com/669c0d9d9c64fa04779654a2"
      >
        <span className="flex items-center rounded-sm bg-geniallyblue-100 w-full py-12 text-[40px] group-hover:bg-transparent text-white font-bold">
          <div className="absolute left-[20px]">
            <Image
              src="/rocket2-32.png"
              alt="rocket icon"
              width={32}
              height={32}
            />
          </div>
          <div className="absolute left-[80px]">Click aquí para iniciar</div>
        </span>
      </a>
      <Image
        src="/logomostlan.png"
        alt="Logo de mostla"
        width={400}
        height={400}
        className="bottom-[7%] absolute"
      ></Image>
    </div>
  );
}
