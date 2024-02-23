import Buffer from "@/components/Buffer";
import DynamicText from "@/components/DynamicText";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import { sections, ticAtom } from "@/utils/store";
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
              Background
            </h2>

            <p className="text-gray-400 lg:max-w-md text-lg">
              Fullstack software engineer. Self-taught, passionate about
              learning new things and building experiences through technology.
              <br />
              <br />
              I graduated at the Polytechnic University of Catalonia from
              Multimedia, where design was a key component of the curriculum,
              complemented by elements of programming and computer science. With
              these introductory elements, I independently delved into the world
              of technology and programming.
              <br />
              <br />
              Since then I have gained professional experience in diverse
              environments, including startups, universities, and non-profit
              organizations, where my work has centered around the intersection
              of technology, design and digital tools.
            </p>
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
        <h2 className="text-3xl font-bold text-gray-100 border-b-2 border-gray-500 pb-2 lg:w-1/2 ">
          Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Card
            href="https://ecodeliver.es/"
            title="Fulltime · Fullstack Developer"
            company="ecoDeliver"
            dateStart={new Date("2023-09-01")}
            dateEnd={new Date()}
            technologies={[
              "React / Next.js",
              "Docker / Kubernetes",
              "Flutter / Dart",
              "Python / Flask",
              "PostgreSQL",
            ]}
          >
            <p>
              I was part of a small team of 3, responsible for end-to-end
              development and operations, iOS and Android apps, third-party
              integrations, cloud deployment, algorithimic package sorting with
              vehicle routing optimization machines, cloud deployment, AI bots
              and more.
            </p>
          </Card>

          <Card
            href="https://github.com/randreu28/infrastructure-mastery"
            title="Project · Infrastructure Mastery"
            company="Personal project"
            dateStart={new Date("2022-11-01")}
            dateEnd={new Date("2023-02-01")}
            technologies={["Docker", "Kubernetes", "PostgreSQL", "Minikube"]}
          >
            <p>
              A comprehensive learning project designed to provide a deep dive
              into Kubernetes and Docker. It follows a three-layered
              architecture model, demonstrating containerization with Docker and
              orchestration with Kubernetes, emphasizing modern infrastructure
              practices.
            </p>
          </Card>

          <Card
            href="https://canviaelmon.upc.edu/ca"
            title="Part time · Frontend Developer"
            company="UPC"
            dateStart={new Date("2021-09-22")}
            dateEnd={new Date("2023-07-31")}
            technologies={[
              "Javascript / Vue",
              "Springboot",
              "Docker / Kubernetes",
              "Kotlin",
              "Google analytics",
              "Git",
            ]}
          >
            I was in the department of innovation and community in the UPC. I
            was in charge of analyitics and tracking of the multiple websites of
            the university, as well as reports and marketing strategies for the
            multiple events that were done, as well as the maintainment of the
            webapp for said events.
          </Card>

          <Card
            href="https://tfg-docs.vercel.app/"
            title="Project · Bachelor's Thesis on 3D components"
            company="UPC"
            dateStart={new Date("2022-04-01")}
            dateEnd={new Date("2023-06-01")}
            technologies={[
              "React / Next.js",
              "Three.js",
              "React-three-fiber",
              "GLSL",
              "Blender",
              "Typescript",
            ]}
          >
            <p>
              The thesis showcases a gallery of interactive applications with 3D
              components. It's documentation will walk you through the different
              projects that I worked on, as well as the implementation and the
              decision-making of all the technological architecture.
            </p>
          </Card>

          <Card
            href="https://github.com/randreu28/valorant-plus"
            title="Project · Valorant+"
            company="UPC"
            dateStart={new Date("2023-06-01")}
            dateEnd={new Date("2023-02-01")}
            technologies={[
              "React Native",
              "JavaScript",
              "Expo go",
              "Mobile developemnet",
              "Valorant API",
            ]}
          >
            <p>
              A React Native application created as a group university project
              to learn about React Native development, in my mobile software
              developmenet class. The design was made in Figma before hand and
              was implemented using the official valorant API
            </p>
          </Card>

          <Card
            href="https://github.com/randreu28/AnimeHub-App"
            title="Project · AnimeHub"
            company="UPC"
            dateStart={new Date("2023-06-01")}
            dateEnd={new Date("2023-02-01")}
            technologies={[
              "Flutter",
              "Git",
              "Firestore",
              "Riverpod",
              "Jikan API",
              "Mobile developemnet",
            ]}
          >
            <p>
              A Fullstack flutter application created as a group university
              project to learn about Flutter development, in my mobile software
              developmenet class. It was implemented using the official Jikan
              API, saving user data in firestore.
            </p>
          </Card>
        </div>
      </section>
      <section
        id={sections[3].href}
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
