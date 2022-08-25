import { useState } from "react";

import Navbar from "./Navbar";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Skills from "./Skills";

const Contents = () => {
  const [state, setState] = useState("about");
  return (
    <div>
      <Navbar state={state} setState={setState} />
      {state == "about" && <About />}
      {state == "works" && <Works />}
      {state == "skills" && <Skills />}
      {state == "contact" && <Contact />}
    </div>
  );
};

export default Contents;
