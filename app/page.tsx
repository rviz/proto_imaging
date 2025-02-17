import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="{montserrat} ml-6 mt-6">
      <p className="text-4xl font-bold">Mostla Protos</p>
      <p className="text-2xl font-bold mb-4">Pantallas Iniciales</p>
      
      <div>
        <Link href="/ai" className="">
          <p className="text-2xl text-cyan-800 underline">Artificial Intelligence</p>
        </Link>
      </div>

      <div>
        <Link href="/vr" className="">
        <p className="text-2xl text-cyan-800 underline">Virtual Reality</p>
        </Link>
      </div>

      <div>
        <Link href="/blockchain" className="">
        <p className="text-2xl text-cyan-800 underline">Blockchain</p>
        </Link>
      </div>
    </div>
  );
}
