import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { upc, projPrev } from "../../content";

import Footer from "../../components/Footer";
import SmNavbar from "../../components/SmNavbar";
import ProjectPrev from "../../components/ProjectPrev";
import WebHolder from "../../components/WebHolder";

export default function App() {
  const router = useRouter();
  //const content = upc[router.locale];
  const content1 = projPrev[router.locale];
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

        <h1 className="text-4xl font-bold pb-10">{content1.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
          <ProjectPrev
            aos="fade-right"
            aosDelay="250"
            image="/media/upc.jpg"
            title={content1.upcTitle}
            description={content1.upcDescription}
            link="/projects/upc"
            //hasDemo="https://impulsa.upc.edu/"
          />
          <ProjectPrev
            aos="fade-left"
            aosDelay="250"
            image="/media/ecoDeliver.jpg"
            title={content1.ipcTitle}
            description={content1.ipcDescription}
            link="/projects/imaginePlanetChallenge"
            //hasDemo="http://www.ecodeliver.es/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
