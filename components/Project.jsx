import { ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image"; /* ?!?? */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { index } from "../content";

export default function Project({ title, p, img, link, isEven, hasDemo }) {
  const router = useRouter();

  const content = index[router.locale];
  return (
    <div
      data-aos={isEven ? "fade-left" : "fade-right"}
      data-aos-delay="250"
      className="bg-gray-800 lg:bg-transparent rounded"
    >
      {/* Small screens */}
      <div className="p-3 lg:p-0 lg:hidden">
        <h3 className="text-myPrimary font-semibold">{content.projPrev}</h3>
        <h1 className="text-2xl font-bold">{title}</h1>
        <br />
        <Image
          className="rounded lg:hidden object-cover object-center"
          src={img}
          alt=""
          layout="responsive"
          height={300}
          width={500}
        />
        <br />
        <p className="text-gray-400">{p}</p>
        <div className="flex items-center mt-6 -mx-2 space-x-5">
          <Link href={link}>
            <a className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-2 duration-200 text-white">
              {content.projBtn}
            </a>
          </Link>
          {hasDemo ? (
            <a
              target={"_blank"}
              href={hasDemo}
              className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-myPrimary hover:ring-myPrimary duration-200 font-bold ml-2 "
            >
              <p className="my-auto">{content.Btn1}</p>
              <ExternalLinkIcon className="h-5 my-auto" />
            </a>
          ) : null}
        </div>
      </div>

      {/* Large screen */}
      <div className="hidden lg:grid grid-cols-2">
        {isEven ? (
          <>
            <span className="p-10 pl-0 flex max-w-xl">
              <Image
                className="hidden lg:block rounded my-auto object-cover object-center"
                src={img}
                alt=""
                height={300}
                width={500}
              />
            </span>

            <div className="flex flex-col my-auto text-right">
              <h3 className="text-myPrimary font-semibold">
                {content.projPrev}
              </h3>
              <h1 className="text-2xl font-bold pb-5">{title}</h1>
              <p className="max-w-md ml-auto text-gray-400">{p}</p>
              <div className="flex items-center justify-end mr-1 mt-6 space-x-5 -mx-2">
                <Link href={link}>
                  <a className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-2 text-white">
                    {content.projBtn}
                  </a>
                </Link>
                {hasDemo ? (
                  <a
                    target={"_blank"}
                    href={hasDemo}
                    className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-myPrimary hover:ring-myPrimary duration-200 font-bold ml-2 "
                  >
                    <p className="my-auto">{content.projBtn1}</p>
                    <ExternalLinkIcon className="h-5 my-auto" />
                  </a>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col my-auto">
              <h3 className="text-myPrimary font-semibold">
                {content.projPrev}
              </h3>
              <h1 className="text-2xl font-bold pb-5">{title}</h1>
              <p className="max-w-md text-gray-400">{p}</p>
              <div className="flex items-center mt-6 -mx-2 space-x-5">
                <Link href={link}>
                  <a className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-2 text-white">
                    {content.projBtn}
                  </a>
                </Link>
                {hasDemo ? (
                  <a
                    href={hasDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex space-x-2 ring-gray-300 ring-2 text-gray-300 rounded-lg px-3 py-2 hover:text-myPrimary hover:ring-myPrimary duration-200 font-bold ml-2 "
                  >
                    <p className="my-auto">{content.projBtn1}</p>
                    <ExternalLinkIcon className="h-5 my-auto" />
                  </a>
                ) : null}
              </div>
            </div>

            <span className="p-10 pr-0 flex max-w-xl">
              <Image
                className="hidden lg:block rounded my-auto object-cover object-center"
                src={img}
                alt=""
                height={300}
                width={500}
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
