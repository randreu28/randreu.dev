import { ActiveSection, activeSectionAtom, sections } from "@/utils/store";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useAtom(activeSectionAtom);
  useEffect(() => {
    const domSections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      domSections.forEach((section) => {
        const sectionId = section.getAttribute("id") as ActiveSection;
        const sectionTop = section.offsetTop - window.innerHeight * 0.5;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY <= sectionBottom &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    });
  }, [setActiveSection]);

  return (
    <nav className="fixed justify-between flex w-full py-5 px-5 lg:px-[10vh] xl:px-[20vh] z-[99999] bg-my-black">
      <Image
        className="my-auto h-10 w-auto"
        src="/logo.svg"
        height={35}
        width={70}
        alt="logo"
        priority
      />
      <li className="list-none hidden md:inline font-medium text-lg divide-x space-x-8 divide-gray-600 my-auto">
        <span className="space-x-8 my-auto">
          {sections.map((item, key) => (
            <a
              className={
                activeSection === item.href
                  ? " text-my-orange duration-200"
                  : "duration-200"
              }
              href={"#" + item.href}
              key={key}
            >
              {item.name}
            </a>
          ))}
        </span>
        <Link href="/portfolio" className="pl-8">
          Portfolio
        </Link>
      </li>
      <Popover className="md:hidden">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="-mr-2 flex items-center">
                <Popover.Button className="bg-my-black rounded-md p-2 inline-flex items-center justify-center hover:opacity-75focus:outline-none focus:ring-2 focus:ring-inset focus:ring-my-orange">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right"
          >
            <div className="rounded-lg bg-my-black ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Image
                  className="my-auto h-10 w-auto"
                  src="/logo.svg"
                  height={35}
                  width={70}
                  alt="logo"
                />
                <div className="-mr-2">
                  <Popover.Button className="bg-my-black rounded-md p-2 inline-flex items-center justify-center  hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-my-orange">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((item) => (
                  <Popover.Button
                    className="block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                    key={item.name}
                    href={"#" + item.href}
                    as="a"
                  >
                    <span
                      className={
                        activeSection === item.href
                          ? " text-my-orange duration-200"
                          : "duration-200"
                      }
                    >
                      {item.name}
                    </span>
                  </Popover.Button>
                ))}

                <Link
                  className="block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                  href="portfolio"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
}
