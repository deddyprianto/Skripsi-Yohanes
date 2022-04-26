import React from "react";
import Hero from "components/componentLanding/Home/Hero";
import Featured from "components/componentLanding/Home/Featured";
import Price from "components/componentLanding/Home/Price";
import Tools from "components/componentLanding/Home/Tools";
import Testimonial from "components/componentLanding/Home/Testimonial";
import InputFile from "./componentLanding/Home/InputFile";
import About from "./componentLanding/Home/About";
import Footer from "./componentLanding/Home/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      <Hero />
      <About />
      <Featured />
      <Price />
      <Tools />
      <InputFile />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
