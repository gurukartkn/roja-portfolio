import { FaUser, FaBriefcase, FaAddressBook, FaJsSquare } from "react-icons/fa";

const Navbar = ({ state, setState }) => {
  return (
    <header className="w-full md:w-[380px] h-[144px] p-[30px] ml-auto rounded-[16px]">
      <nav>
        <ul className="flex gap-2 items-center justify-center md:justify-between">
          <li>
            <button
              onClick={() => setState("about")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "about"
                  ? "bg-[#063A8D] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaUser />
                </i>
              </span>
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setState("works")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "works"
                  ? "bg-[#063A8D] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaBriefcase />
                </i>
              </span>
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => setState("skills")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "skills"
                  ? "bg-[#063A8D] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaJsSquare />
                </i>
              </span>
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => setState("contact")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "contact"
                  ? "bg-[#063A8D] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaAddressBook />
                </i>
              </span>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
