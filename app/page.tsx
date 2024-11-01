import Image from "next/image";
import ModelViewer from "../components/modelviewer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
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
