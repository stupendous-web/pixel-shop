import Head from "next/head";

import Navigation from "../components/Navigation";
import Parallax from "../components/Parallax";
import Story from "../components/Story";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Beta() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>The Pixel Shop</title>
      </Head>
      <Parallax />
      <Story />
      <Services />
      <Divider
        divider={3}
        daytimeBackgroundColor={"var(--wood)"}
        nighttimeBackgroundColor={"var(--wood-2)"}
      />
      <Team />
      <Divider
        divider={0}
        daytimeBackgroundColor={"var(--daytime-shade-3)"}
        nighttimeBackgroundColor={"var(--nighttime-shade-3)"}
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
      <Loading loading={loading} />
    </>
  );
}
