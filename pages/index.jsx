import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FolderIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

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

  const navigation = {
    en: [
      { name: "Home", href: "#Home" },
      { name: "About me", href: "#About me" },
      { name: "My projects", href: "#My projects" },
      { name: "Contact me", href: "#Contact me" },
    ],
    es: [
      { name: "Inicio", href: "#Inicio" },
      { name: "Acerca de mi", href: "#Acerca de mi" },
      { name: "Mis proyectos", href: "#Mis proyectos" },
      { name: "Concátame", href: "#Concátame" },
    ],
    ca: [
      { name: "Inici", href: "#Inici" },
      { name: "Sobre mi", href: "#Sobre mi" },
      { name: "Els meus projectes", href: "#Els meus projectes" },
      { name: "Contacta amb mi", href: "#Contacta amb mi" },
    ]
  };

  const [isInSection, setSection] = useState(navigation[router.locale][0].name);

  return (
    <>
      <Head>
        <title>Randreu.dev</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
        {/* SEO METADATA? */}
      </Head>

      <Navbar isInSection={isInSection} setSection={setSection} navigation={navigation} />
      <Particles tic={tic} isInSection={isInSection} navigation={navigation} />
      <section
        id={navigation[router.locale][0].name}
        className="h-screen flex font-righteous"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl mx-auto mt-20 text-center p-10 xl:my-auto xl:ml-32 xl:text-left ">
          Hi, I&apos;m Rubén and I <br />
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
              Who I am
            </h2>

            <p className=" text-gray-400 lg:max-w-md text-lg">
              Hi, my name is{" "}
              <span className="font-bold underline decoration-blue-400 decoration-wavy decoration-slice text-white">
                Rubén Chiquin Font{" "}
              </span>
              and I am a 20-year-old Multimedia college student, passionate
              about self-learning and building things for the web. I&apos;m
              always looking for new oportunities for building accessible,
              inclusive products and digital experiences.
              <br />
              <br />
              I&apos;ve worked in{" "}
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
                universities
              </a>{" "}
              and in{" "}
              <a
                href={navigation[router.locale][2].href}
                className="text-blue-400 underline hover:opacity-80 duration-200"
              >
                non-profit institutions
              </a>
              , all work related to design, technology and digital tools.
              <br /> <br />
              Here are a few technologies I’ve been learning recently:
            </p>
            <ul className="list-disc md:columns-2 ml-4 text-gray-400">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Javascript (ES6+)</li>
              <li>Three.js</li>
              <li>Next.js</li>
              <li>Google Analytics</li>
            </ul>

            <div className="flex items-center mt-6 -mx-2 space-x-5">
              <a
                href={navigation[router.locale][2].href}
                className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-2 text-white"
              >
                Let&apos;s get in touch!
              </a>
              <div className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-myPrimary hover:ring-myPrimary duration-200 font-bold ml-2">
                <Link href="/myProjects">
                  <a>Check out my portfolio</a>
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
              Some projects I&apos;ve participed in
            </h2>
          </div>
        </div>

        <Project
          title="Imagine Planet Challenge"
          img={"/media/ecoDeliver.jpg"}
          p={
            <>
              In my early years of college I got involved in a startup called{" "}
              <span className="font-bold underline decoration-green-400 decoration-wavy decoration-slice text-white">
                ecoDeliver,{" "}
              </span>
              where I had the fortune to help as a marketing consultant and
              designer, as I had recently learned about design and marketing
              principles.
              <br />
              <br />
              Later on we participated and won the Imagine Planet Challenge, a
              challenge made for newborn sustainable startups, designed for
              tutoring and networking.
            </>
          }
          link="/imaginePlanetChallenge"
        />

        <Project
          title="Scholarship in the UPC"
          img={"/media/upc.jpg"}
          p={
            <>
              In the third year of college I&apos;ve been working at the Vertex
              centre at the UPC university, where I was tasked to work on the
              maintenance of the multiple websites of the institution.
              <br />
              <br />I was also tasked with setting up and monitoring all the
              data received from{" "}
              <span className="font-bold underline decoration-yellow-400 decoration-wavy decoration-slice text-white">
                Google Analytics{" "}
              </span>{" "}
              and making changes accordingly to ensure a good UX.{" "}
            </>
          }
          link="/upc"
          isEven={true}
        />
        <Project
          title="GOAC multimedia technician"
          img={"/media/placeholder.png"}
          p={
            <>
              Contrary to other careers, one of the benefits of studying a
              design career is the opportunity to show{" "}
              <a
                href="https://www.behance.net/RubenChiquin"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 duration-200 hover:opacity-75 "
              >
                your personal projects and assignments
              </a>{" "}
              to your friends and family. And as a result of that, a friend of a
              friend, whom I showed a design of mine contacted me for a business
              opportunity.
              <br />
              <br />
              Such opportunity was to be part of the{" "}
              <span className="font-bold underline decoration-cyan-400 decoration-wavy decoration-slice text-white">
                GOAC organisation,{" "}
              </span>
              where I was tasked to manage the social media accounts such as
              their Youtube channel and their blog, as well as design tasks,
              such as banners, rollups and presentation cards.
            </>
          }
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
              Let&apos;s get in touch!
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
