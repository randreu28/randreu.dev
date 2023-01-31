import Navbar, { sections } from "@/components/Navbar";
import { useState } from "react";

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].href);

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
            className="h-screen flex border-gray-500 border-2"
            key={key}
          >
            <h1 className="m-auto">{section.name}</h1>
          </section>
        );
      })}
    </>
  );
}
