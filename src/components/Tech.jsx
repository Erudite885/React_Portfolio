import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <img
            src={technology.icon}
            alt="technology icon"
            className="bg-white rounded-full bg-gradient-to-bl from-slate-950 via-slate-600 to-slate-800 p-2"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
