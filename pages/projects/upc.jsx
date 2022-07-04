import React from "react";
import Head from "next/head";
import Image from "next/image";

import Footer from "../../components/Footer";
import SmNavbar from "../../components/SmNavbar";
import ProjectPrev from "../../components/ProjectPrev";
import WebHolder from "../../components/WebHolder";

export default function App() {
  return (
    <>
      <Head>
        <title>Upc</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
        {/* SEO METADATA */}
      </Head>
      <SmNavbar isActive="Projects" />
      <div className="mx-5 md:mx-14 lg:mx-44 py-20">
        <WebHolder />
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
            image="/media/ecoDeliver.jpg"
            title={<>Imagine Planet Challenge</>}
            description={
              <>
                In my early years of college I got involved in a startup called
                ecoDeliver, where I had the fortune to help as a marketing
                consultant and designer. Then I had the chance to participate on
                the Imagine Planet Challenge with them, alongside another...
              </>
            }
            link="/projects/imaginePlanetChallenge"
          />
          <ProjectPrev
            aos="fade-left"
            aosDelay="250"
            image="/media/upc.jpg"
            title={<>Schoolarship in the UPC</>}
            description={
              <>
                In the third year of college I&apos;ve been working at the
                Vertex centre at the UPC university, where I was tasked to work
                on the maintenance of the multiple websites of the institution.
                I was also tasked with setting up and monitoring all the data
                received from Google Analytics and..
              </>
            }
            link="/projects/upc"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
