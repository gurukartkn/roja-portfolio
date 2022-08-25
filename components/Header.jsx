import Link from "next/link";
import Image from "next/image";

import RojaPic from "../public/assets/rose.png";

const Header = () => {
  return (
    <div className="container py-5">
      <div className="w-max shadow-md rounded-2xl bg-white flex justify-between p-4">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <h1 className="text-3xl font-bold text-[#429BEC]">
              R
              <Image src={RojaPic} alt="logo" width={25} height={25} />
              ja
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
