import React from "react";
import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import SmNavbar from "../components/SmNavbar";
import ProjectPrev from "../components/ProjectPrev";

export default function App() {
  return (
    <>
      <Head>
        <title>Goac</title>
        <link rel="shortcut icon" href="/media/logo.svg" />
        {/* SEO METADATA */}
      </Head>
      <SmNavbar isActive="Projects" />
      <div className="mx-5 md:mx-14 lg:mx-44 py-20">
        <h3 className="text-myPrimary font-semibold">Featured project</h3>
        <h1 className="text-4xl font-bold pb-5">GOAC multimedia technician</h1>

        <div className="space-y-24">
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="space-y-3">
              <Image
                className="object-cover object-center w-full h-auto my-auto self-center"
                src="/media/placeholder.png"
                alt=""
                layout="responsive"
                width={500}
                height={300}
              />
              <p className="text-gray-400 text-center italic">
                Here should be an image description
              </p>
            </div>
            <span className="space-y-5 self-center">
              <h2 className="text-white font-bold text-2xl">
                Placeholder title
              </h2>
              <p className="text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium omnis sequi laboriosam ad est ex corporis quod,
                eveniet esse aliquid aperiam. Inventore illum non voluptate
                voluptates consectetur, natus pariatur{" "}
                <a
                  className="text-blue-400 underline hover:opacity-75 duration-200"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  corporis quod
                </a>{" "}
                laboriosam ad est ex corporis quod.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti est quam, voluptate non eius nesciunt! Culpa
                dignissimos praesentium, iste debitis consequuntur obcaecati.
                Libero quaerat eos incidunt laboriosam illo laborum ullam.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti est quam, voluptate non eius nesciunt!{" "}
                <a
                  className="text-blue-400 underline hover:opacity-75 duration-200"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Libero quaerat eos
                </a>{" "}
                incidunt laboriosam illo laborum ullam.
              </p>
            </span>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="self-center text-gray-400">
              <h2 className="text-white font-bold text-2xl">
                Placeholder title
              </h2>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est quam, voluptate non eius nesciunt! Culpa dignissimos
              praesentium, iste debitis consequuntur obcaecati{" "}
              <a
                className="text-blue-400 underline hover:opacity-75 duration-200"
                href="https://vimeo.com/570039624"
                target="_blank"
                rel="noreferrer"
              >
                Deleniti est quam
              </a>{" "}
              lor sit amet consectetur adipisicing elit. Deleniti est quam,
              voluptate non eius nesciunt! Culpa dignissimos praesentium, iste
              debitis consequuntur obcaecati
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              soluta cupiditate deserunt ut nobis distinctio sit, saepe corrupti
              ipsa nisi quaerat aliquid id corporis eaque neque aliquam ipsum?
              Officiis, eos!Culpa dignissimos praesentium, iste debitis
              consequuntur.
            </div>
            <div className="space-y-3">
            <Image
                className="object-cover object-center w-full h-auto my-auto self-center"
                src="/media/placeholder.png"
                alt=""
                layout="responsive"
                width={500}
                height={300}
              />
              <p className="text-gray-400 text-center italic">
                Here should be an image description
              </p>
            </div>
          </span>
          <span className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit praesentium, eum odio laboriosam harum ratione
              dolor! Eum, est quibusdam doloribus quo in, sed libero magni porro
              unde dicta inventore sit.
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in
              voluptates deleniti odit nobis eos doloremque voluptas tempora.
              Cumque, minus repellat suscipit voluptatum exercitationem fugit
              quaerat tenetur reiciendis dolorem animi!
            </p>
          </span>
          <div className="space-y-3">
            <img
              className="rounded max-w-2xl mx-auto object-cover object-center w-full h-auto"
              src="/media/placeholder.png"
              alt=""
            />
            <p className="text-gray-400 text-center italic">
              Here should be an image description
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
            image="/media/ecoDeliver.jpg"
            title={<>Imagine Planet Challenge</>}
            description={
              <>
                In my early years of college I got involved in a startup called
                ecoDeliver, where I had the fortune to help as a marketing
                consultant and designer. Then I had the chance to participate
                and won the Imagine Planet Challenge with them...
              </>
            }
            link="/imaginePlanetChallenge"
          />
          <ProjectPrev
            aos="fade-left"
            aosDelay="250"
            image="/media/upc.jpg"
            title={<>Schoolarship in the UPC</>}
            description={
              <>
                In the third year of college I&apos;ve been working at the Vertex
                centre at the UPC university, where I was tasked to work on the
                maintenance of the multiple websites of the institution. I was
                also tasked with setting up and monitoring all the data received
                from Google Analytics and...
              </>
            }
            link="/upc"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
