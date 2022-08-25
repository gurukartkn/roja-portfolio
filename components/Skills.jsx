import { useState, useEffect } from "react";

import { urlFor, client } from "../utils/sanity";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="shadow-lg rounded-2xl bg-white">
      <div className="py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="text-xl lg:text-3xl mb-3 font-bold text-[#429BEC]">
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
              <h3 className="text-[#063A8D] lg:text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
