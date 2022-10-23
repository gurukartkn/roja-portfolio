import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { client, urlFor } from "../utils/sanity";

const Skills = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="shadow-lg rounded-2xl bg-white dark:bg-opacity-5"
    >
      <div className="py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-poppins text-xl lg:text-3xl mb-3 font-bold text-[#429BEC] dark:text-white">
          My Skills
        </h2>
        <div className="mt-5 flex justify-between flex-wrap">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src={urlFor(skill.icon)}
                alt={skill.name}
                className="rounded-xl h-12"
              />
              <h3 className="font-roboto text-[#063A8D] dark:text-slate-200 lg:text-lg">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
