import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

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
    <div className="shadow-lg rounded-2xl bg-white">
      <div className="py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="text-xl lg:text-3xl mb-3 font-bold text-[#429BEC]">
          My Works
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-5 justify-end">
          {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`p-2 rounded-2xl shadow-md cursor-pointer text-xs md:text-sm xl:text-base font-medium ${
                  activeFilter === item
                    ? "bg-[#063A8D] text-[#F3F9FF]"
                    : "bg-[#F3F9FF] text-[#063A8D] "
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-5">
          {filterWork.map((work, index) => (
            <div
              className="flex flex-col p-3 bg-[#F3F9FF] rounded-xl shadow-md min-w-[200px]"
              key={index}
            >
              <div className="flex flex-col gap-2">
                <img
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                  className="h-60 shadow-md rounded-2xl bg-white"
                />

                <div className=" flex justify-around">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <div className="text-2xl p-2 rounded-full bg-white shadow-md text-[#063A8D] hover:text-white hover:bg-[#063A8D]">
                      <AiFillEye />
                    </div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <div className="text-2xl p-2 rounded-full bg-white shadow-md text-[#063A8D] hover:text-white hover:bg-[#063A8D]">
                      <AiFillGithub />
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col text-center mt-3 gap-2">
                <h4 className="text-lg font-medium text-[#063A8D]">
                  {work.title}
                </h4>
                <p className="text-[#429BEC]">{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="text-[#429BEC]">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
