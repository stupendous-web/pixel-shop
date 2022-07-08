import Head from "next/head";

import Navigation from "../components/Navigation";
import Parallax from "../components/Parallax";
import Story from "../components/Story";
import Collection from "../components/Collection";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function Beta() {
  return (
    <>
      <Head>
        <title>The Pixel Shop</title>
      </Head>
      <Parallax />
      <Story />
      <Divider
        divider={0}
        daytimeBackgroundColor={"var(--daytime-shade-5)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-5)"}
      />
      <Services />
      <Divider
        divider={2}
        daytimeBackgroundColor={"var(--wood)"}
        nighttimeBackgroundColor={"var(--wood)"}
      />
      <Collection />
      <Divider
        divider={1}
        daytimeBackgroundColor={"var(--morris-leaf)"}
        nighttimeBackgroundColor={"var(--camping-trip)"}
      />
      <Team />
      <Divider
        divider={3}
        daytimeBackgroundColor={"var(--silver-fern)"}
        nighttimeBackgroundColor={"var(--metropolitan-silhouette)"}
      />
      <FAQ />
      <Divider
        divider={4}
        daytimeBackgroundColor={"var(--morris-leaf)"}
        nighttimeBackgroundColor={"var(--camping-trip)"}
      />
      <Contact />
      <Footer />
      <Navigation />
    </>
  );
}
