import Link from "next/link";
import Image from "next/image";

import RojaPic from "../public/assets/roja.png";

const Header = () => {
  return (
    <div className="container lg:sticky top-0 py-5">
      <div className="w-max shadow-lg rounded-2xl bg-slate-50 bg-opacity-10 flex justify-between px-4">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <Image src={RojaPic} alt="logo" width={100} height={100} />
            <h1 className="text-3xl font-serif text-white">Roja</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
