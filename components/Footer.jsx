import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white p-5">
      © 2022 All Rights Reserved by{" "}
      <Link href="/">
        <a className="text-pink-600 font-bold">Roja.</a>
      </Link>
    </div>
  );
};

export default Footer;
