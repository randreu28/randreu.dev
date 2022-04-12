import Head from "next/head";
import { useRouter } from "next/router";

import SmNavbar from "../components/SmNavbar";
import Footer from "../components/Footer";
import ProjectOverview from "../components/ProjectOverview";

import { portfolio } from "../content";

export default function Portfolio() {
  const router = useRouter();
  const content = portfolio[router.locale];
  return (
    <>
      <Head></Head>
      <SmNavbar isActive="Portfolio" />
      <br />
      <br />
      <br />
      <h1 className="text-center py-5 md:py-10 text-2xl md:text-5xl font-bold">
        {content.title}
      </h1>

      <p className="text-center text-gray-400 pb-5 px-10 lg:px-32 xl:px-72 md:text-lg dark:text-gray-400 duration-500">
        {content.subtitle}
      </p>

      <div className="m-4 lg:m-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.cards.map((card) => (
          <ProjectOverview
            key={card.title}
            title={card.title}
            date={card.date}
            src={card.src}
            href={card.href}
            tag1={card.tag1}
            tag2={card.tag2}
            tag3={card.tag3}
            text={card.text}
            inDev={card.inDev}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
