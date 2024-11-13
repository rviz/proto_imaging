import Image from "next/image";
import ModelViewer from "../components/modelviewer";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="{montserrat}">
      <div>
        <Link href="/ai" className="">
          Artificial Intelligence
        </Link>
      </div>

      <div>
        <Link href="/vr" className="">
          Virtual Reality
        </Link>
      </div>
    </div>
  );
}
