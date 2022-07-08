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
        divider={3}
        daytimeBackgroundColor={"var(--daytime-shade-5)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-5)"}
      />
      <Services />
      <Divider
        divider={1}
        daytimeBackgroundColor={"var(--wood)"}
        nighttimeBackgroundColor={"var(--wood)"}
      />
      <Collection />
      <Divider
        divider={2}
        daytimeBackgroundColor={"var(--daytime-shade-5)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-5)"}
      />
      <Team />
      <Divider
        divider={3}
        daytimeBackgroundColor={"var(--daytime-shade-5)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-5)"}
      />
      <FAQ />
      <Divider
        divider={4}
        daytimeBackgroundColor={"var(--daytime-shade-5)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-5)"}
      />
      <Contact />
      <Footer />
      <Navigation />
    </>
  );
}
