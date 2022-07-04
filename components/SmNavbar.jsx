import { useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import { TranslateIcon, ChevronDownIcon } from "@heroicons/react/outline";

import Image from "next/image";
import { useRouter } from "next/router";
import { navigation } from "../content";
import Link from "next/link";

export default function Navbar({ isActive }) {
  const router = useRouter();
  const content = navigation[router.locale];

  return (
    <nav className="fixed justify-between flex w-full py-5 px-5 lg:px-[10vh] xl:px-[20vh] z-[99999] bg-myDark">
      <Link href="/">
        <button>
          <Image
            className="my-auto h-10"
            src="/media/logo.svg"
            height={35}
            width={70}
            alt="logo"
            priority
          />
        </button>
      </Link>
      <li className="list-none hidden md:inline font-medium text-lg divide-x space-x-8 divide-gray-600 my-auto">
        <span className="space-x-8 my-auto">
          <Link href="/">
            <a className={isActive === "Home" ? "text-myPrimary" : ""}>
              {navigation[router.locale].main[0].name}
            </a>
          </Link>

          <Link href={"/#" + navigation[router.locale].main[1].href}>
            <a className={isActive === "About me" ? "text-myPrimary" : ""}>
              {navigation[router.locale].main[1].name}
            </a>
          </Link>

          <Link href={"/#" + navigation[router.locale].main[2].href}>
            <a className={isActive === "Projects" ? "text-myPrimary" : ""}>
              {navigation[router.locale].main[2].name}
            </a>
          </Link>

          <Link href={"/#" + navigation[router.locale].main[3].href}>
            <a className={isActive === "Contact me" ? "text-myPrimary" : ""}>
              {navigation[router.locale].main[3].name}
            </a>
          </Link>
        </span>
        <Link href="/portfolio">
          <a
            className={
              isActive === "Portfolio" ? "pl-8 text-myPrimary" : "pl-8"
            }
          >
            {navigation[router.locale].portfolio}
          </a>
        </Link>
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="pl-6 align-sub">
            <span className="flex flex-row space-x-1">
              <TranslateIcon className="h-6 w-6" />
              <ChevronDownIcon className="h-4 w-4 my-auto" />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute origin-top-right w-fit right-0 p-1 px-2 divide-y divide-gray-700 space-y-2 mt-2  flex flex-col bg-myDark rounded-md border-[1px]">
              <Menu.Item>
                <button className="font-medium hover:opacity-75 duration-200">
                  <Link href="" scroll={false} locale="en">
                    <a
                      className={
                        router.locale == "en" ? "text-myPrimary" : null
                      }
                    >
                      English
                    </a>
                  </Link>
                </button>
              </Menu.Item>

              <Menu.Item>
                <button className="font-medium hover:opacity-75 duration-200">
                  <Link href="" scroll={false} locale="es">
                    <a
                      className={
                        router.locale == "es" ? "text-myPrimary" : null
                      }
                    >
                      Español
                    </a>
                  </Link>
                </button>
              </Menu.Item>

              <Menu.Item>
                <button className="font-medium hover:opacity-75 duration-200">
                  <Link href="" scroll={false} locale="ca">
                    <a
                      className={
                        router.locale == "ca" ? "text-myPrimary" : null
                      }
                    >
                      Catalá
                    </a>
                  </Link>
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
      <Popover className="md:hidden">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="-mr-2 flex items-center">
                <Popover.Button className="bg-myDark rounded-md p-2 inline-flex items-center justify-center hover:opacity-75focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myPrimary">
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
                {navigation[router.locale].main.map((item) => (
                  <Popover.Button
                    className="block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                    key={item.name}
                    href={item.href}
                    as="a"
                  >
                    {item.name}
                  </Popover.Button>
                ))}

                <Link href="myProjects">
                  <a className="block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300">
                    {navigation[router.locale].portfolio}
                  </a>
                </Link>

                <Menu as="div" className="px-3 py-2">
                  <Menu.Button className="align-sub">
                    <span className="flex flex-row space-x-1">
                      <TranslateIcon className="h-6 w-6" />
                      <ChevronDownIcon className="h-4 w-4 my-auto" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="px-3 py-2 space-y-3 mt-2 flex flex-col text-left font-medium">
                      <Menu.Item>
                        <button className="font-medium hover:opacity-75 duration-200 text-left">
                          <Link href="" scroll={false} locale="en">
                            <a>English</a>
                          </Link>
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        <button className="font-medium hover:opacity-75 duration-200 text-left">
                          <Link href="" scroll={false} locale="es">
                            <a>Español</a>
                          </Link>
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        <button className="font-medium hover:opacity-75 duration-200 text-left">
                          <Link href="" scroll={false} locale="ca">
                            <a>Catalá</a>
                          </Link>
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
}
