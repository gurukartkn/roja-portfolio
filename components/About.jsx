import { useState, useEffect } from "react";
import Image from "next/image";

import { urlFor, client } from "../utils/sanity";

const About = () => {
  const [abouts, setAbouts] = useState(abouts);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <div className="shadow-lg rounded-2xl bg-slate-50 bg-opacity-10">
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="text-xl lg:text-3xl mb-3 font-bold text-white">
          About Me
        </h2>
        <p className="text-[#44566C] lg:text-lg">
          Results-driven computer science student passionate about developing
          front end applications. Excellent problem-solving skills and ability
          to perform well in a team and adroit at HTML,CSS,JavaScript, ReactJs
          and NextJs.
        </p>
      </div>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="text-xl lg:text-3xl mb-3 font-bold text-white">
          What I do
        </h2>
        <div className="flex gap-5 justify-between flex-wrap">
          {abouts.map((about) => (
            <div className="flex flex-col max-w-[100px]" key={about.title}>
              <Image
                src={urlFor(about.imgUrl)}
                alt={about.title}
                width={75}
                height={75}
                className="rounded-xl"
              />
              <h3>{about.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
