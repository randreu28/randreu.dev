import DynamicText from "@/components/DynamicText";
import Navbar, { sections } from "@/components/Navbar";
import { useEffect, useState } from "react";
import Buffer from "@/components/Buffer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";
import Link from "next/link";
import { FolderIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].href);
  const [tic, setTic] = useState<number>(0);
  const [hiddenControlls, setHiddenControls] = useState<boolean>(true);

  useEffect(() => {
    let interval = setInterval(() => {
      if (tic == 3) setTic(0);
      else setTic(tic + 1);
    }, 5000);

    window.addEventListener("keydown", (e) => {
      console.log(e.altKey, e.key);
      if (e.altKey && e.key == "h") setHiddenControls(!hiddenControlls);
    });

    return () => {
      clearInterval(interval);
    };
  }, [tic, hiddenControlls]);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="absolute left-10 top-20">
        <Leva fill hidden={hiddenControlls} />
      </div>

      <div className="h-screen w-screen fixed -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />

          <Buffer tic={tic} activeSection={activeSection} />
        </Canvas>
      </div>
      <section id={sections[0].href} className="h-screen flex font-righteous">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-20 text-center p-10 z-10 xl:my-auto xl:ml-32 xl:text-left">
          Hello, my name is Rubén and I... <br />
          <DynamicText tic={tic} />
        </h1>
      </section>

      <section id={sections[1].href} className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold text-gray-100 border-b-2 border-gray-500 pb-2">
              Who I am
            </h2>

            <p className=" text-gray-400 lg:max-w-md text-lg">
              Hi, my name is Rubén Chiquin and I am a designer and software
              developer, passionate about learning new things and building
              experiences through technology.
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
