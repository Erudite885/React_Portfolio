import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[48rem] mx-auto`}>
      <div
        className={`absolute gap-5 md:gap-16 lg:gap-24 xl:gap-8 z-10 inset-0 top-[140px] lg:top-[230px] max-w-7xl mx-auto flex flex-row items-start `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-80 h-80 absolute rounded-full bg-gradient-to-tr from-blue-100 via-slate-600 to-blue-800 opacity-20 blur-3xl top-48 -left-[250px]" />
        </div>

        <div>
          <p
            className={`uppercase mb-4 text-xl font-bold text-white bg-gradient-to-r from-fuchsia-800 via-orange-600 to-rose-600`}
          >
            Your
          </p>
          <h1
            className={`${styles.heroHeadText} mt-8 tracking-wider max-w-sm text-white`}
          >
            FRONTEND DEVELOPER
          </h1>
          <div className="mt-6">
            <p className={` mb-4 text-white-100`}>
              Building dynamic software, and <br className="sm:hidden block" />{" "}
              prioritizing user experience, <br />
            </p>
            <p className=" mb-4">
              Creating infinite posibilities, <br className="sm:hidden block" />
            </p>
            <p className="italic ">
              If <span className="text-orange-500">You</span> can think it, I
              can <span className="underline text-lime-400">build</span> it.
            </p>
          </div>
          <button className="text-white mt-12 p-2 tracking-wide rounded-xl bg-gradient-to-r from-fuchsia-950 via-orange-950 to-rose-800 ">
            <a href="#work">View More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
