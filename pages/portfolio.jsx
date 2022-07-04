import Head from "next/head";
import { useRouter } from "next/router";

import SmNavbar from "../components/SmNavbar";
import Footer from "../components/Footer";
import WebHolder from "../components/WebHolder";

//Whenever the new projects arrive, perhaps I can reuse this componennt
import ProjectOverview from "../components/ProjectOverview";

import { portfolio } from "../content";

export default function Portfolio() {
  const router = useRouter();
  const content = portfolio[router.locale];
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <SmNavbar isActive="Portfolio" />
      <WebHolder />
      <Footer />
    </>
  );
}
