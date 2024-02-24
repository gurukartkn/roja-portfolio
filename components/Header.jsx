import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

import Branding from "../public/assets/rose.png";
import BrandingDark from "../public/assets/rose-dark.png";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <FaSun
          className="w-8 h-8 p-2 shadow-inner rounded-full bg-[#F3F9FF]"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaMoon
          className="w-8 h-8 p-2 shadow-inner rounded-full bg-[#F3F9FF]"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-5"
    >
      <div className="w-full fixed top-0 left-0 shadow-md rounded-2xl bg-white dark:bg-opacity-5 flex justify-between items-center p-4">
        <Link href="/">
          <a className="flex gap-2 items-center relative">
            <div className="flex text-3xl font-bold font-poppins text-[#429BEC] dark:text-[#FA58B6]">
              R
              <div className="dark:hidden">
                <Image src={Branding} alt="logo" width={25} height={25} />
              </div>
              <div className="hidden dark:block">
                <Image src={BrandingDark} alt="logo" width={25} height={25} />
              </div>
              ja
            </div>
          </a>
        </Link>
        {renderThemeChanger()}
      </div>
    </motion.div>
  );
};

export default Header;
