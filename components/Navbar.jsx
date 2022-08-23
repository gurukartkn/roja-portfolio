import Link from "next/link";
import { useRouter } from "next/router";

import { FaUser, FaBriefcase, FaAddressBook, FaJsSquare } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="w-full md:w-[380px] h-[144px] p-[30px] ml-auto rounded-[16px]">
      <nav>
        <ul className="flex gap-2 items-center justify-center md:justify-between">
          <li>
            <Link href="/">
              <a
                className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                  router.pathname == "/"
                    ? "bg-[#063A8D] text-white bg-opacity-100"
                    : "text-[#429BEC] bg-slate-200 bg-opacity-20  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
                }`}
              >
                <span className="text-xl mb-1">
                  <i>
                    <FaUser />
                  </i>
                </span>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a
                className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                  router.pathname == "/portfolio"
                    ? "bg-[#063A8D] text-white bg-opacity-100"
                    : "text-[#429BEC] bg-slate-200 bg-opacity-20  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
                }`}
              >
                <span className="text-xl mb-1">
                  <i>
                    <FaBriefcase />
                  </i>
                </span>
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                  router.pathname == "/contact"
                    ? "bg-[#063A8D] text-white bg-opacity-100"
                    : "text-[#429BEC] bg-slate-200 bg-opacity-20  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
                }`}
              >
                <span className="text-xl mb-1">
                  <i>
                    <FaJsSquare />
                  </i>
                </span>
                Skills
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={` shadow-lg flex justify-center flex-col p-2 rounded-lg items-center  ${
                  router.pathname == "/contact"
                    ? "bg-[#063A8D] text-white bg-opacity-100"
                    : "text-[#429BEC] bg-slate-200 bg-opacity-20  hover:bg-[#063A8D] hover:bg-opacity-100 hover:text-white"
                }`}
              >
                <span className="text-xl mb-1">
                  <i>
                    <FaAddressBook />
                  </i>
                </span>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
