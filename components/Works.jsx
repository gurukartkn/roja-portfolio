import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";

import { urlFor, client } from "../utils/sanity";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="shadow-lg rounded-2xl bg-white dark:bg-[#1D1D42]"
    >
      <div className="py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-poppins text-xl lg:text-3xl mb-3 font-bold text-[#429BEC] dark:text-white">
          My Works
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-5 justify-end">
          {["UI/UX", "Web App", "React JS", "Next JS", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`p-2 rounded-2xl shadow-inner cursor-pointer text-xs md:text-sm xl:text-base font-roboto ${
                  activeFilter === item
                    ? "bg-[#063A8D] dark:bg-[#FA58B6] text-[#F3F9FF] dark:text-white"
                    : "bg-[#F3F9FF] dark:bg-opacity-5 text-[#063A8D] dark:text-slate-200"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="mt-5 flex flex-wrap justify-center gap-5"
        >
          {filterWork.map((work, index) => (
            <div
              className="flex flex-col p-3 bg-[#F3F9FF] dark:bg-[#1A1A40] rounded-xl shadow-inner min-w-[200px]"
              key={index}
            >
              <div className="flex flex-col gap-2">
                <img
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                  className="h-60 w-40 shadow-md rounded-2xl bg-white dark:bg-opacity-5"
                />

                <div className=" flex justify-around">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <div className="text-2xl p-2 rounded-full bg-white dark:bg-opacity-5 shadow-md text-[#063A8D] dark:text-white hover:text-white hover:bg-[#063A8D]">
                      <AiFillEye />
                    </div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <div className="text-2xl p-2 rounded-full bg-white dark:bg-opacity-5 shadow-md text-[#063A8D] dark:text-white hover:text-white hover:bg-[#063A8D]">
                      <AiFillGithub />
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col text-center mt-3 gap-2">
                <h4 className="font-poppins text-lg font-medium text-[#063A8D] dark:text-[#FA58B6]">
                  {work.title}
                </h4>
                <p className="font-roboto font-thin text-[#429BEC] dark:text-slate-200">
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="font-roboto font-thin text-[#429BEC] dark:text-slate-200">
                    {work.tags[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;
