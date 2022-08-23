import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-[#429BEC] p-5">
      © 2022 All Rights Reserved by{" "}
      <Link href="/">
        <a className="text-[#063A8D] font-bold">Roja.</a>
      </Link>
    </div>
  );
};

export default Footer;
