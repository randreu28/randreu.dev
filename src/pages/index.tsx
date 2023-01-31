import DynamicText from "@/components/DynamicText";
import Navbar, { sections } from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].href);
  const [tic, setTic] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (tic == 3) setTic(0);
      else setTic(tic + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [tic]);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {sections.map((section, key) => {
        return (
          <section
            id={section.href}
            className="h-screen flex border-gray-500 border-2 font-righteous"
            key={key}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-20 text-center p-10 xl:my-auto xl:ml-32 xl:text-left">
              Hello, my name is Rubén and I... <br />
              <DynamicText tic={tic} />
            </h1>
          </section>
        );
      })}
    </>
  );
}
