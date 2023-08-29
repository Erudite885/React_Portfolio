import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[48rem] mx-auto`}>
      <div
        className={`absolute gap-5 md:gap-16 lg:gap-24 xl:gap-8 z-10 inset-0 top-[140px] lg:top-[180px] xl:top-[25px] max-w-7xl mx-auto flex flex-row items-start xl:items-center xl:justify-center `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-80 h-80 absolute rounded-full bg-gradient-to-tr from-blue-100 via-slate-600 to-blue-800 opacity-20 blur-3xl top-48 -left-[250px]" />
        </div>

        <div className="xl:flex xl:flex-col">
          <p
            className={`uppercase mb-4 px-4 py-1 rounded text-xl xl:text-3xl font-bold text-white bg-gradient-to-r from-fuchsia-800 via-orange-600 to-rose-600`}
          >
            Your
          </p>
          <h1
            className={`${styles.heroHeadText} bg-gradient-to-br from-lime-300 to-sky-500 mt-8 tracking-wider max-w-sm xl:max-w-full text-transparent bg-clip-text`}
          >
            FRONTEND DEVELOPER
          </h1>
          <div className="mt-8 xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-2xl">
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
          <button className="text-white xl:mx-auto xl:px-20 mt-20 p-2 tracking-wide rounded-xl bg-gradient-to-r from-fuchsia-950 via-orange-950 to-rose-800 ">
            <a className=" xl:text-2xl" href="#work">View More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
