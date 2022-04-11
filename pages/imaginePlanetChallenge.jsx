import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { imaginePlanetChallenge, projPrev } from "../content";

import Footer from "../components/Footer";
import SmNavbar from "../components/SmNavbar";
import ProjectPrev from "../components/ProjectPrev";

export default function App() {
  const router = useRouter();
  const content = imaginePlanetChallenge[router.locale];
  const content1 = projPrev[router.locale];

  return (
    <>
      <Head>
        <title>Imagine Planet Challenge</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
        {/* SEO METADATA */}
      </Head>
      <SmNavbar isActive="Projects" />
      <div className="mx-5 md:mx-14 lg:mx-44 py-20">
        <h3 className="text-myPrimary font-semibold">{content.featured}</h3>
        <h1 className="text-4xl font-bold pb-5">{content.title}</h1>

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
                {content.imgText1}
              </p>
            </div>
            <span className="space-y-5 self-center">
              <h2 className="text-white font-bold text-2xl">
                {content.subtitle1}
              </h2>
              <p className="text-gray-400">{content.p1}</p>
            </span>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="self-center text-gray-400">
              <h2 className="text-white font-bold text-2xl">
                {content.subtitle2}
              </h2>
              {content.p2}
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
                {content.imgText2}
              </p>
            </div>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            {content.p3}
          </span>
          <div className="space-y-3">
            <img
              className="rounded max-w-2xl mx-auto object-cover object-center w-full h-auto"
              src="/media/ecoDeliver.jpg"
              alt=""
            />
            <p className="text-gray-400 text-center italic">
              {content.imgText3}
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

        <h1 className="text-4xl font-bold pb-10">{content1.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
          <ProjectPrev
            aos="fade-right"
            aosDelay="250"
            image="/media/upc.jpg"
            title={content1.upcTitle}
            description={content1.upcDescription}
            link="/upc"
          />
          <ProjectPrev
            aos="fade-left"
            aosDelay="250"
            image="/media/placeholder.png"
            title={content1.goacTitle}
            description={content1.goacDescription}
            link="/goac"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
