import React from "react";
import Image from "next/image";
import Head from "next/head";

import Footer from "../components/Footer";
import SmNavbar from "../components/SmNavbar";
import ProjectPrev from "../components/ProjectPrev";

export default function App() {

  return (
    <>
    <Head>
      <title>EcoDeliver</title>
      <link rel="shortcut icon" href="/media/logo.svg" />
      {/* SEO METADATA */}
    </Head>
      <SmNavbar />
      <div className="mx-5 md:mx-14 lg:mx-44 py-20">
        <h3 className="text-myPrimary font-semibold">Featured project</h3>
        <h1 className="text-4xl font-bold pb-5">Imagine Planet Challenge</h1>

        <div className="space-y-24">
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="space-y-3">
              <Image
                className="object-cover object-center w-full h-auto my-auto"
                src="/media/DarkSloganT.svg"
                alt=""
                width={600}
                height={400}
                layout={"responsive"}
                priority
              />
              <p className="text-gray-400 text-center italic">
                Extract from the ecoDeliver Brand Guidelines
              </p>
            </div>
            <span className="space-y-5 self-center">
              <h2 className="text-white font-bold text-2xl">
                An opportunity with ecoDeliver
              </h2>
              <p className="text-gray-400">
                Back in my early years of college, I started to learn about
                design principles, the creation of good brand guidelines,
                marketing strategies among other things. Being that the case, I
                started compiling a{" "}
                <a
                  className="text-blue-400 underline hover:opacity-75 duration-200"
                  href="https://www.behance.net/RubenChiquin"
                  target="_blank"
                  rel="noreferrer"
                >
                  collection of small design projects
                </a>{" "}
                that I shared with my friends and family.
                <br />
                <br />
                That&apos;s when an acquaintance of mine and a friend of his, both
                recently graduated engineers who where planning on starting
                their own startup together, saw my work, approached me and asked
                for my advice about their brand and their business idea, and I
                offered to help.
                <br />
                <br />I thought they had a great project in hands and while I
                was taking classes at college, I spent part of my time designing{" "}
                <a
                  className="text-blue-400 underline hover:opacity-75 duration-200"
                  href="https://www.behance.net/gallery/125864213/ecoDeliver-Brand-Guidlines-20"
                  target="_blank"
                  rel="noreferrer"
                >
                  their brand guidelines and logo
                </a>
                , which they liked a lot and ended up adopting as their own.
              </p>
            </span>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="self-center text-gray-400">
              <h2 className="text-white font-bold text-2xl">The challenge</h2>
              <br />
              The ecoDeliver startup project consisted on a 100% ecoFriendly
              package delivery platform, and looking for ways to bring the
              project forwards, ecoDeliver got involved in a competition called
              the{" "}
              <a
                className="text-blue-400 underline hover:opacity-75 duration-200"
                href="https://vimeo.com/570039624"
                target="_blank"
                rel="noreferrer"
              >
                Imagine Planet Challenge
              </a>
              , a challenge made for newborn sustainable startups, designed for
              tutoring and networking.
              <br />
              <br />
              The event consisted on 10 startups, each one with the oportunity
              of explaining their ideas and goals that could benefit the
              enviroment in front of an audience and a very qualified jury, who
              would decide who would be premiated with a 3 weeks trip to
              Lanzarote, where there would be all sort of planned activities and
              mentoring for the winning team.
            </div>
            <div className="space-y-3">
              <Image
                className="object-cover object-center w-full h-auto my-auto self-center"
                src="/media/celebration.png"
                alt=""
                layout="responsive"
                width={1900}
                height={1000}
              />
              <p className="text-gray-400 text-center italic">
                Winning the Imagine Planet Challenge
              </p>
            </div>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <p className="text-gray-400">
              Much to our delight, we, alongside another startup called Kidalos,
              won the challenge and enjoyed a{" "}
              <a
                className="text-blue-400 underline hover:opacity-75 duration-200"
                href="https://vimeo.com/612344678"
                target="_blank"
                rel="noreferrer"
              >
                very enriching experience in Lanzarote
              </a>
              , where we had the pleasure to meet very relevant people, such as{" "}
              <a
                className="text-blue-400 underline hover:opacity-75 duration-200"
                href="https://caixabank.com/comunicacion/noticia/ecodeliver-y-kidalos-ganan-la-primera-edicion-del-imaginplanet-challenge_es.html?id=42880#"
                target="_blank"
                rel="noreferrer"
              >
                Benjami Puigdevall, the CEO of Imagine Bank
              </a>
              , among many others who accompanied us throughout the journey.
            </p>
            <p className="text-gray-400">
              At the end of the trip, we had to present one last time
              ecoDeliver&apos;s idea to an audience. The event took place at{" "}
              <a
                className="text-blue-400 underline hover:opacity-75 duration-200"
                href="https://vimeo.com/580269013"
                target="_blank"
                rel="noreferrer"
              >
                Los Jameos del Agua
              </a>
              , a very iconic place in Lanzarote, and in there we shared our
              business idea while being recorded and watched for hundreds of
              people, including Benjamin Perdomo, Managing Director of the Art,
              Culture and Tourism center in Lanzarote.
            </p>
          </span>
          <div className="space-y-3">
            <img
              className="rounded max-w-2xl mx-auto object-cover object-center w-full h-auto"
              src="/media/ecoDeliver.jpg"
              alt=""
            />
            <p className="text-gray-400 text-center italic">
              Presentation at Los Jameos Del Agua
            </p>
          </div>
        </div>

        <br />
        <br />
        <span className="divide-y">
          <p />
          <p />
        </span>
        <br />
        <br />

        <h1 className="text-4xl font-bold pb-10">Other projects</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
          <ProjectPrev
            aos="fade-right"
            aosDelay="250"
            image="/media/upc.jpg"
            title={<>Schoolarship in the UPC</>}
            description={
              <>
                In the third year of college I&apos;ve been working at the Vertex
                centre at the UPC university, where I was tasked to work on the
                maintenance of the multiple websites of the institution. I was
                also tasked with setting up and monitoring all the data received
                from Google Analytics and making changes accordingly to ensure a
                good UX...
              </>
            }
            link="/upc"
          />
          <ProjectPrev
            aos="fade-left"
            aosDelay="250"
            image="/media/react.svg"
            title={<>Self-taught projects</>}
            description={
              <>
                During my time in college, I started noticing my preference for
                coding and web development. Multidisciplinar as my career is,
                the knowledge I was being taught in my classes was not deep
                enough to satisfy my curiosity, and the moment I realised that I
                started learning by myself...
              </>
            }
            link="/myProjects"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
