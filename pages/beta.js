import Head from "next/head";
import { useSelector } from "react-redux";

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
  const hour = useSelector((state) => state.hour);
  const daytime = useSelector((state) => state.daytime);
  let greeting = "";
  if (hour < 12) {
    greeting = "Good Morning";
  }
  if (hour >= 12 && hour < 16) {
    greeting = "Good Afternoon";
  }
  if (hour >= 16) {
    greeting = "Good Evening";
  }

  return (
    <>
      <Head>
        <title>The Pixel Shop</title>
      </Head>
      <div className={"uk-width-1-1 uk-inline"}>
        <Parallax />
        <div
          className={"uk-position-top uk-flex uk-flex-middle"}
          uk-height-viewport={""}
        >
          <div className={"uk-width-1-1"}>
            <div className={"uk-container uk-margin-xlarge-top"}>
              <div
                className={
                  daytime
                    ? "uk-width-1-2@s uk-padding uk-overlay-default"
                    : "uk-width-1-2@s uk-light uk-padding uk-overlay-primary"
                }
                style={{
                  backgroundColor: daytime
                    ? "var(--silver-fern)"
                    : "var(--metropolitan-silhouette)",
                  transition: "var(--transition)",
                  opacity: 0.8,
                }}
              >
                <h1 style={{ transition: "var(--transition)" }}>{greeting}</h1>
                <p style={{ transition: "var(--transition)" }}>
                  We&apos;re busy pushing pixels for you; they&apos;ll be here
                  soon! In the meantime,{" "}
                  <a href={"#Contact"} uk-scroll={""}>
                    Say, hi
                  </a>{" "}
                  or <a href={"mailto:sumiez@thepixelshop.app"}>email us!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Story />
      <Divider
        divider={0}
        daytimeBackgroundColor={"var(--silver-fern)"}
        nighttimeBackgroundColor={"var(--metropolitan-silhouette)"}
      />
      <Collection />
      <Divider
        divider={1}
        daytimeBackgroundColor={"var(--morris-leaf)"}
        nighttimeBackgroundColor={"var(--camping-trip)"}
      />
      <Services />
      <Divider
        divider={2}
        daytimeBackgroundColor={"var(--silver-fern)"}
        nighttimeBackgroundColor={"var(--metropolitan-silhouette)"}
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
