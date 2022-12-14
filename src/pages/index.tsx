import type { NextPage } from "next";
import Head from "next/head";
// import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import { Faqs } from "../components/Faqs";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Pricing from "../components/Pricing";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import Transform from "../components/Transform";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapid Reporting</title>
        <meta
          name="description"
          content="For all your custom software needs. Need a custom dashboard, webapp or automation get in contact and we will be able to help you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" relative">
        <header className="fixed w-screen z-50 bg-white shadow-md">
          <Header />
        </header>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Transform />
        {/* <CallToAction /> */}
        <Pricing />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
