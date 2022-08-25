import { FaUser, FaBriefcase, FaAddressBook, FaJsSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ state, setState }) => {
  return (
    <header className="font-poppins w-full md:w-[380px] h-[144px] p-[30px] ml-auto rounded-[16px]">
      <nav>
        <ul className="flex gap-2 items-center justify-center md:justify-between">
          <li>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setState("about")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "about"
                  ? "bg-[#063A8D] dark:bg-[#FA58B6] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white dark:bg-opacity-5 dark:text-slate-200 hover:bg-[#063A8D] hover:dark:bg-[#FA58B6] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaUser />
                </i>
              </span>
              About
            </motion.button>
          </li>
          <li>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              onClick={() => setState("works")}
              className={`shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "works"
                  ? "bg-[#063A8D] dark:bg-[#FA58B6] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white dark:bg-opacity-5 dark:text-slate-200 hover:bg-[#063A8D] hover:dark:bg-[#FA58B6] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaBriefcase />
                </i>
              </span>
              Portfolio
            </motion.button>
          </li>
          <li>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={() => setState("skills")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "skills"
                  ? "bg-[#063A8D] dark:bg-[#FA58B6] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white dark:bg-opacity-5 dark:text-slate-200 hover:bg-[#063A8D] hover:dark:bg-[#FA58B6] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaJsSquare />
                </i>
              </span>
              Skills
            </motion.button>
          </li>
          <li>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              onClick={() => setState("contact")}
              className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                state == "contact"
                  ? "bg-[#063A8D] dark:bg-[#FA58B6] text-white bg-opacity-100"
                  : "text-[#429BEC] bg-white dark:bg-opacity-5 dark:text-slate-200 hover:bg-[#063A8D] hover:dark:bg-[#FA58B6] hover:bg-opacity-100 hover:text-white"
              }`}
            >
              <span className="text-xl mb-1">
                <i>
                  <FaAddressBook />
                </i>
              </span>
              Contact
            </motion.button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
