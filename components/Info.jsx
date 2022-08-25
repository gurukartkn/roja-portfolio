import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMobile,
  FaEnvelopeOpenText,
  FaLocationArrow,
} from "react-icons/fa";

const Info = () => {
  return (
    <div className="col-span-12 lg:col-span-4 top-44 h-max shadow-lg rounded-2xl bg-white">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 lg:mt-0">
        <div className="pb-8">
          <h2 className="mt-6 mb-1 text-[26px] xl:text-5xl font-semibold text-[#063A8D]">
            Roja
          </h2>
          <h3 className="mb-4 text-[#429BEC] inline-block xl:text-xl px-5 py-1.5 rounded-lg ">
            Front End Developer
          </h3>

          <div className="flex justify-center gap-5 bg-[#F3F9FF] shadow-md text-2xl w-max p-5 rounded-2xl ">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#1773EA]">
                <i>
                  <FaLinkedin />
                </i>
              </span>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#1C9CEA]">
                <i>
                  <FaTwitter />
                </i>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-black">
                <i>
                  <FaGithub />
                </i>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
            </a>
          </div>
          <div className="p-7 rounded-2xl mt-7 bg-[#F3F9FF] shadow-md">
            <div className="flex border-b border-[#E3E3E3]  pb-2.5">
              <span className="text-[#E93B81] text-xl bg-white text-center items-center flex p-2 rounded-lg bg-opacity-30">
                <i>
                  <FaMobile />
                </i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] "> Phone </p>
                <p>+91 99523 37241</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3]  py-2.5">
              <span className="text-xl bg-white text-center items-center flex p-2 rounded-lg bg-opacity-30 text-[#6AB5B9]">
                <i>
                  <FaEnvelopeOpenText />
                </i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] "> Email </p>
                <p>rojamuthu2001@gmail.com</p>
              </div>
            </div>
            <div className="flex py-2.5">
              <span className="text-xl bg-white text-center items-center flex p-2 rounded-lg bg-opacity-30 text-[#FD7590]">
                <i>
                  <FaLocationArrow />
                </i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] "> Location </p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="bg-[#063A8D] p-3 rounded-2xl mt-3 font-medium shadow-md text-white">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
