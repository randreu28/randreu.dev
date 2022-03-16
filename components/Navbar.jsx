import { useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

export const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About me", href: "#About me" },
  { name: "My projects", href: "#My projects" },
  { name: "Contact me", href: "#Contact me" },
];

export default function Navbar({ isInSection, setSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - window.innerHeight * 0.5;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
          setSection(sectionId);
        }
      });
    });
  }, [setSection]);

  useEffect(() => {
    let html = document.getElementsByTagName("html")[0];
    html.classList = "scroll-smooth";
  }, []);

  return (
    <nav className="fixed justify-between flex w-full py-5 px-10 md:px-[10vh] lg:px-[20vh] z-[99999] bg-myDark">
      <Image
        className="my-auto h-10"
        src="/media/logo.svg"
        height={35}
        width={70}
        alt="logo"
      />
      <li className="list-none space-x-8 my-auto hidden md:inline font-medium text-lg">
        <a
          className={
            isInSection === navigation[0].name
              ? " text-myPrimary duration-200"
              : "duration-200"
          }
          href={navigation[0].href}
        >
          {navigation[0].name}
        </a>
        <a
          className={
            isInSection === navigation[1].name
              ? "text-myPrimary duration-200"
              : "duration-200"
          }
          href={navigation[1].href}
        >
          {navigation[1].name}
        </a>
        <a
          className={
            isInSection === navigation[2].name
              ? "text-myPrimary duration-200"
              : "duration-200"
          }
          href={navigation[2].href}
        >
          {navigation[2].name}
        </a>
        <a
          className={
            isInSection === navigation[3].name
              ? "text-myPrimary duration-200"
              : "duration-200"
          }
          href={navigation[3].href}
        >
          {navigation[3].name}
        </a>
      </li>
      <Popover className="md:hidden">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="-mr-2 flex items-center">
                <Popover.Button className="bg-myDark rounded-md p-2 inline-flex items-center justify-center  hover:opacity-75focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myPrimary">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
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
            <div className="rounded-lg bg-myDark ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Image
                  className="my-auto h-10"
                  src="/media/logo.svg"
                  height={35}
                  width={70}
                  alt="logo"
                />
                <div className="-mr-2">
                  <Popover.Button className="bg-myDark rounded-md p-2 inline-flex items-center justify-center  hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myPrimary">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Popover.Button
                    className="block text-lg font-medium px-3 py-2 rounded-md hover:opacity-7"
                    key={item.name}
                    href={item.href}
                    as="a"
                  >
                    {item.name}
                  </Popover.Button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
}
