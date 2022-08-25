import { useState, useEffect } from "react";

import { client } from "../utils/sanity";

import Navbar from "./Navbar";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Skills from "./Skills";

const Contents = () => {
  const [state, setState] = useState("about");
  const [abouts, setAbouts] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';
    client.fetch(aboutQuery).then((data) => setAbouts(data));

    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div>
      <Navbar state={state} setState={setState} />
      {state == "about" && <About abouts={abouts} />}
      {state == "works" && <Works />}
      {state == "skills" && <Skills skills={skills} />}
      {state == "contact" && <Contact />}
    </div>
  );
};

export default Contents;
