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
      <div className="flex flex-nowrap">
        <p className="text-2xl font-bold mr-2">
          Pantallas Iniciales diseñadas para ser utilizadas con
        </p>
        <Link href="https://protohologram.com/the-m/" className="">
          <p className="text-2xl mb-4 text-red-500 underline">Proto M</p>
        </Link>
      </div>
      <div className="flex flex-nowrap">
        <ul className="list-disc ml-6">
          <p className="text-2xl font-bold text-blue-750">Español</p>
          <Link href="/ai/es" className="">
            <li className="list-disc text-2xl text-cyan-800 underline">
              Inteligencia Artificial
            </li>
          </Link>
          <Link href="/vr/es" className="">
            <li className="text-2xl text-cyan-800 underline">
              Realidad Virtual
            </li>
          </Link>
          <Link href="/blockchain/es" className="">
            <li className="text-2xl text-cyan-800 underline">Blockchain</li>
          </Link>
          <Link href="/ar/es" className="">
            <li className="text-2xl text-cyan-800 underline">
              Realidad Aumentada
            </li>
          </Link>
          <Link href="/tele/es" className="">
            <li className="text-2xl text-cyan-800 underline">Telepresencia</li>
          </Link>
          <Link href="/biom/es" className="">
            <li className="text-2xl text-cyan-800 underline">Biometrics</li>
          </Link>
        </ul>

        <ul className="list-disc ml-20">
          <p className="text-2xl font-bold text-blue-750">English</p>
          <Link href="/ai/en" className="">
            <li className="list-disc text-2xl text-cyan-800 underline">
              Artificial Intelligence
            </li>
          </Link>
          <Link href="/vr/en" className="">
            <li className="text-2xl text-cyan-800 underline">
              Virtual Reality
            </li>
          </Link>
          <Link href="/blockchain/en" className="">
            <li className="text-2xl text-cyan-800 underline">Blockchain</li>
          </Link>
          <Link href="/ar/en" className="">
            <li className="text-2xl text-cyan-800 underline">
              Augmented Reality
            </li>
          </Link>
          <Link href="/tele/en" className="">
            <li className="text-2xl text-cyan-800 underline">Teleprescence</li>
          </Link>
          <Link href="/biom/en" className="">
            <li className="text-2xl text-cyan-800 underline">Biometrics</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
