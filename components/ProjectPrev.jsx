import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";
import { projPrev } from "../content";

export default function ProjectPrev({
  image,
  title,
  description,
  link,
  aos,
  aosDelay,
}) {
  const router = useRouter();
  const content = projPrev[router.locale];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-gray-800 text-white rounded p-5 pb-8 justify-between flex flex-col"
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      <div>
        <Image
          className="max-w-2xl mx-auto object-cover object-center w-full h-auto pb-6"
          src={image}
          alt=""
          layout="responsive"
          width={550}
          height={300}
        />
      </div>
      <div>
        <h3 className="text-myPrimary font-semibold text-sm pt-3">
          {content.featuredProject}
        </h3>
        <h1 className="text-2xl font-bold pb-5">{title}</h1>
        <p className="text-gray-400">{description}</p>
        <br />
        <br />
        <Link href={link}>
          <a className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold duration-200">
            {content.readMore}
          </a>
        </Link>
      </div>
    </div>
  );
}
