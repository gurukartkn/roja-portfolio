import { motion } from "framer-motion";

import { urlFor } from "../utils/sanity";

const About = ({ abouts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="shadow-lg rounded-2xl bg-white dark:bg-opacity-5"
    >
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-poppins text-xl lg:text-3xl mb-3 font-bold text-[#429BEC] dark:text-white">
          About Me
        </h2>
        <p className="font-roboto font-thin text-[#063A8D] dark:text-slate-200 lg:text-lg">
          Results-driven computer science student passionate about developing
          front end applications. Excellent problem-solving skills and ability
          to perform well in a team and adroit at HTML,CSS,JavaScript, ReactJs
          and NextJs.
        </p>
      </div>
      <div className="pt-5 md:py-5 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-poppins text-xl lg:text-3xl mb-3 font-bold text-[#429BEC] dark:text-white">
          What I do
        </h2>
        <div className="flex gap-5 justify-between flex-wrap">
          {abouts.map((about) => (
            <div
              className="flex flex-col items-center justify-center gap-2"
              key={about.title}
            >
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                className="rounded-xl h-36"
              />
              <h3 className="font-roboto text-[#063A8D] dark:text-slate-200 lg:text-lg font-semibold">
                {about.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
