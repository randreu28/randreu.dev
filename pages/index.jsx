import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FolderIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { index, navigation } from "../content";

import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import DynamicText from "../components/DynamicText";
import Project from "../components/Project";

export default function App() {
  var [tic, setTic] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = useRouter();

  const content = index[router.locale];

  const [isInSection, setSection] = useState(navigation[router.locale][0].name);

  return (
    <>
      <Head>
        <title>Randreu.dev</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
        {/* SEO METADATA? */}
      </Head>

      <Navbar
        isInSection={isInSection}
        setSection={setSection}
        navigation={navigation}
      />
      <Particles tic={tic} isInSection={isInSection} />
      <section
        id={navigation[router.locale][0].name}
        className="h-screen flex font-righteous"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl mx-auto mt-20 text-center p-10 xl:my-auto xl:ml-32 xl:text-left ">
          {content.title} <br />
          <DynamicText tic={tic} setTic={setTic} />
        </h1>
      </section>

      <section
        id={navigation[router.locale][1].name}
        className="container px-6 py-8 mx-auto"
      >
        <div className="items-center lg:flex">
          <div
            data-aos="fade-right"
            data-aos-delay="250"
            className="lg:w-1/2 space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-100 border-b-2 border-gray-500 pb-2">
              {content.introTitle}
            </h2>

            <p className=" text-gray-400 lg:max-w-md text-lg">
              {content.intro1}
              <span className="font-bold underline decoration-blue-400 decoration-wavy decoration-slice text-white">
                Rubén Chiquin Font{" "}
              </span>
              {content.intro2}
              <br />
              <br />
              {content.intro3}
              <a
                href={navigation[router.locale][2].href}
                className="text-blue-400 underline hover:opacity-80 duration-200"
              >
                startups
              </a>
              ,{" "}
              <a
                href={navigation[router.locale][2].href}
                className="text-blue-400 underline hover:opacity-80 duration-200"
              >
                {content.intro4}
              </a>{" "}
              {content.intro5}
              <a
                href={navigation[router.locale][2].href}
                className="text-blue-400 underline hover:opacity-80 duration-200"
              >
                {content.intro6}
              </a>
              {content.intro7}
              <br/><br/>
              {content.intro8}
            </p>
            <ul className="list-disc md:columns-2 ml-4 text-gray-400">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Javascript (ES6+)</li>
              <li>Three.js</li>
              <li>Next.js</li>
              <li>Google Analytics</li>
            </ul>

            <div className="flex flex-col md:flex-row items-start space-y-5 md:space-y-0 mt-6 -mx-2 md:space-x-5">
              <a
                href={navigation[router.locale][3].href}
                className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-2 text-white"
              >
                {content.introBtn1}
              </a>
              <div className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-myPrimary hover:ring-myPrimary duration-200 font-bold ml-2">
                <Link href="/myProjects">
                  <a>{content.introBtn2}</a>
                </Link>
                <FolderIcon className="h-6 w-6 my-auto" />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="mt-8 lg:mt-0 lg:w-1/2"
          >
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-full h-64 rounded-md shadow"
                  src="/media/placeholder.png"
                  alt=""
                  width={600}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={navigation[router.locale][2].name}
        className="container px-6 py-8 mx-auto space-y-10 lg:space-y-20"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          className="items-center lg:flex"
        >
          <div className="mt-8 lg:mt-0 lg:w-1/2"></div>

          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-3xl text-right w-full font-bold text-gray-100 border-b-2 border-gray-500 pb-2">
              {content.projTitle}
            </h2>
          </div>
        </div>

        <Project
          title={content.proj1Title}
          img={"/media/ecoDeliver.jpg"}
          p={content.proj1}
          link="/imaginePlanetChallenge"
        />

        <Project
          title={content.proj2Title}
          img={"/media/upc.jpg"}
          p={content.proj2}
          link="/upc"
          isEven={true}
        />
        <Project
          title={content.proj3Title}
          img={"/media/placeholder.png"}
          p={content.proj3}
          link="/goac"
        />
      </section>

      <section
        id={navigation[router.locale][3].name}
        className="space-y-10 container px-6 py-8 mx-auto"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="250"
          className="items-center lg:flex"
        >
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-3xl w-full font-bold text-white border-b-2 border-gray-500 pb-2">
              {content.contactTitle}
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2"></div>
        </div>
        <Form />
      </section>
      <Footer />
    </>
  );
}
