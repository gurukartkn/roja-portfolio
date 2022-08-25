import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-[#429BEC] dark:text-white p-5 font-roboto">
      © 2022 All Rights Reserved by{" "}
      <Link href="/">
        <a className="font-poppins text-[#063A8D] dark:text-[#FA58B6] font-bold">
          Roja.
        </a>
      </Link>
    </div>
  );
};

export default Footer;
