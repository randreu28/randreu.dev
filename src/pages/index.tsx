import DynamicText from "@/components/DynamicText";
import Navbar, { sections } from "@/components/Navbar";
import { useEffect, useState } from "react";
import Buffer from "@/components/Buffer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";

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

      <div className="h-screen w-screen fixed">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />

          <Buffer tic={tic} activeSection={activeSection} />
        </Canvas>
      </div>
      {sections.map((section, key) => {
        return (
          <section
            id={section.href}
            className="h-screen flex border-gray-500 border-2 font-righteous"
            key={key}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-20 text-center p-10 z-10 xl:my-auto xl:ml-32 xl:text-left">
              Hello, my name is Rubén and I... <br />
              <DynamicText tic={tic} />
            </h1>
          </section>
        );
      })}
    </>
  );
}
