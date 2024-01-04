import React from "react";
import { FaHome, FaCog, FaFile, FaArrowLeft } from "react-icons/fa"; // Import icons
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdQuiz } from "react-icons/md";
import Quiz from "../assets/quiz.png";
import Advice from "../assets/advice.png";
import Summarize from "../assets/paper.png";
import Book from "../assets/book.png";
import Image from "next/image";
// Top Navbar
const TopNavbar = () => {
  return (
    <nav className="bg-second p-6 flex items-center justify-between">
      <Link href="/">
        <FaArrowLeft className="w-6 h-6 text-second bg-main p-1 rounded-full" />
      </Link>
      <h2 className="text-xl text-main" id="swissra">
        مواقع المُعِين
      </h2>
    </nav>
  );
};

// Bottom Navbar
const BottomNavbar = () => {
  return (
    <nav className="bg-main py-4 px-6 flex items-center justify-between shadow fixed bottom-0 w-full">
      <Link href="/services">
        <FaCog className="w-6 h-6 text-white mr-4" />
      </Link>
      <Link href="/">
        <FaHome className="w-6 h-6 text-white" />
      </Link>
      <Link href="/pages">
        <FaFile className="w-6 h-6 text-white ml-4" />
      </Link>
    </nav>
  );
}; // Grid Services
const GridServices = () => {
  return (
    <div className="bg-second pb-20 md:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 pt-8 ">
        <div className="flex flex-col gap-2 bg-main text-second rounded text-center">
          <Image src={Advice} className="h-16 w-16 mx-auto mt-2" />
          <h1 id="lateef" className="text-2xl">
            نصائِـحُ المُعين
          </h1>
          <Link
            href="/sections/advices"
            id="swissra"
            className="flex justify-between text-sm bg-second text-main p-2 rounded w-[50%] mx-auto my-2"
          >
            <p className="ml-2 w-full"> انتقل إلى النصائح</p>{" "}
            <IoIosArrowForward className="mt-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 bg-main text-second rounded text-center">
          <Image src={Summarize} className="h-16 w-16 mx-auto mt-2" />
          <h1 id="lateef" className="text-2xl">
            ملخّصات المُعين
          </h1>
          <Link
            href="/sections/summarizes"
            id="swissra"
            className="flex justify-between text-sm bg-second text-main p-2 rounded w-[50%] mx-auto my-2"
          >
            <p className="ml-2 w-full"> انتقل إلى المُلخّص</p>{" "}
            <IoIosArrowForward className="mt-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 bg-main text-second rounded text-center">
          <Image src={Book} className="h-16 w-16 mx-auto mt-2" />
          <h1 id="lateef" className="text-2xl">
            مقالات المُعين
          </h1>
          <Link
            href="/sections/blogs"
            id="swissra"
            className="flex justify-between text-sm bg-second text-main p-2 rounded w-[50%] mx-auto my-2"
          >
            <p className="ml-2 w-full"> انتقل إلى المقالات</p>{" "}
            <IoIosArrowForward className="mt-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 bg-main text-second rounded text-center">
          <Image src={Quiz} className="h-16 w-16 mx-auto mt-2" />
          <h1 id="lateef" className="text-2xl">
            تحدّي المُعين
          </h1>
          <Link
            href="/sections/quiz"
            id="swissra"
            className="flex justify-between text-sm bg-second text-main p-2 rounded w-[50%] mx-auto my-2"
          >
            <p className="ml-2 w-full"> انتقل إلى التحدّي</p>{" "}
            <IoIosArrowForward className="mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Example usage in a component:
const SectionsPage = () => {
  return (
    <div>
      <TopNavbar />
      <GridServices />
      <BottomNavbar />
    </div>
  );
};

export default SectionsPage;
