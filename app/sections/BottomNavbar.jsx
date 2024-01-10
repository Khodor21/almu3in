import Link from "next/link";
import React from "react";
import { FaFile } from "react-icons/fa";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";

const BottomNavbar = () => {
  return (
    <nav className="bg-main py-4 px-6 flex items-center justify-between shadow fixed bottom-0 w-full">
      <Link href="/sections/blogs">
        <MdArticle className="w-6 h-6 hover:text-third text-white mr-4" />
      </Link>
      <Link href="/">
        <RiHomeSmileFill className="w-6 h-6 hover:text-third text-white" />
      </Link>
      <Link href="/sections/quiz">
        <FaFile className="w-6 h-6 hover:text-third text-white ml-4" />
      </Link>
    </nav>
  );
};
export default BottomNavbar;
