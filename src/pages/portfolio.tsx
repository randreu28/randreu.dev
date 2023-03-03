import Elph from "@/components/Elph";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Shadow,
} from "@react-three/drei";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  return (
    <>
      <div className="h-screen w-screen fixed -z-10 hidden md:block">
        <Canvas>
          <Environment preset="forest" />
          <group scale={[10, 10, 10]} position={[3, -1, 0]}>
            <Elph />
            <Shadow
              color="black"
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, -0.15]}
              opacity={0.5}
            />
          </group>
        </Canvas>
      </div>
      <div className="h-scren w-screen fixed bottom-0">
        <Footer />
      </div>
      <div className="flex h-screen md:w-1/2 items-center text-gray-400">
        <div className="space-y-3 p-5 mx-auto">
          <h1 className="text-xl">
            Looks like I haven't finished my portfolio yet!
          </h1>
          <p className="max-w-sm">
            In the meanwhile, please wait with this cute little elph, or you can
            check out{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/randreu28"
            >
              my Github profile
            </a>
          </p>
          <div></div>
          <div className="flex space-x-2 rounded-lg py-2 hover:text-my-orange hover:ring-my-orange duration-200 font-bold w-fit">
            <ArrowLeftIcon className="h-6 w-6 my-auto" />
            <Link href="/">Go back</Link>
          </div>
        </div>
      </div>
    </>
  );
}
