import Buffer from "@/components/Buffer";
import DynamicText from "@/components/DynamicText";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import { sections, ticAtom } from "@/utils/store";
import { FolderIcon } from "@heroicons/react/24/outline";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Leva } from "leva";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Index() {
  const [tic, setTic] = useAtom(ticAtom);
  const [hideControls, setHideControls] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tic == 3) setTic(0);
      else setTic(tic + 1);
    }, 5000);

    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.key == "h") setHideControls(!hideControls);
    });

    return () => {
      clearInterval(interval);
    };
  }, [tic, hideControls, setTic]);

  return (
    <>
      <Head>
        <title>Randreu.dev</title>
      </Head>
      <Navbar />
      <div className="absolute left-10 top-20">
        <Leva fill hidden={hideControls} />
      </div>
      <div className="h-screen w-screen fixed -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <Buffer />
        </Canvas>
      </div>
      <section id={sections[0].href} className="h-screen flex font-righteous">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-20 text-center p-10 z-10 xl:my-auto xl:ml-32 xl:text-left">
          Hello, my name is Rubén and I... <br />
          <DynamicText />
        </h1>
      </section>
      <section id={sections[1].href} className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold text-gray-100 border-b-2 border-gray-500 pb-2">
              Who I am
            </h2>

            <p className=" text-gray-400 lg:max-w-md text-lg">
              Hi, my name is{" "}
              <span className="font-bold underline decoration-blue-400 decoration-wavy decoration-slice text-white">
                Rubén Chiquin
              </span>{" "}
              and I am a designer and software developer, passionate about
              learning new things and building experiences through technology.
              <br />
              <br />
              I've worked in startups, universities and in non-profit
              institutions, all work related to design, technology and digital
              tools. Here are a few technologies I've been using recently:
            </p>
            <ul className="list-disc md:columns-2 ml-4 text-gray-400">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>TypeScript (4.9)</li>
              <li>Three.js / R3F</li>
              <li>Next.js 13</li>
              <li>Flutter</li>
            </ul>

            <div className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-my-orange hover:ring-my-orange duration-200 font-bold w-fit">
              <Link href="/portfolio">My portfolio</Link>
              <FolderIcon className="h-6 w-6 my-auto" />
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-96 rounded-md shadow"
                  src="/media/myself.jpeg"
                  alt=""
                  width={711}
                  height={1139}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={sections[2].href}
        className="space-y-10 container px-6 py-8 mx-auto"
      >
        <div className="items-center lg:flex">
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-3xl w-full font-bold text-white border-b-2 border-gray-500 pb-2">
              Let's get in touch!
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2" />
        </div>
        <Form />
      </section>
      <Footer />
    </>
  );
}
