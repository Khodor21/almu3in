"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import BottomNavbar from "./BottomNavbar";
import Quiz from "../assets/quiz.png";
import Advice from "../assets/advice.png";
import Summarize from "../assets/paper.png";
import Book from "../assets/book.png";

const commonStyles = {
  link: "flex justify-between text-sm bg-second text-main p-2 rounded w-[50%] mx-auto my-2",
};

const ServiceItem = ({ image, title, linkHref, linkTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col gap-2 bg-main text-second rounded text-center"
    >
      <Image src={image} className="h-16 w-16 mx-auto mt-2" />
      <h1 id="lateef" className="text-2xl">
        {title}
      </h1>
      <Link href={linkHref} id="swissra" className={commonStyles.link}>
        <p className="ml-2 w-full"> انتقل إلى {linkTitle}</p>{" "}
        <IoIosArrowForward className="mt-1" />
      </Link>
    </motion.div>
  );
};

const SectionsPage = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 1 }}
      >
        <nav className="bg-second p-6 flex items-center justify-between">
          <Link href="/">
            <FaArrowLeft className="w-6 h-6 text-second bg-main hover:text-main hover:bg-second hover:border-2 p-1 rounded-full" />
          </Link>
          <h2 className="text-xl text-main" id="swissra">
            مواقع المُعِين
          </h2>
        </nav>
      </motion.div>
      <div className="bg-second pb-20 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 pt-8">
          <ServiceItem
            image={Quiz}
            title="تحدّي المُعين"
            linkTitle="التحدي"
            linkHref="/sections/quiz"
            alt="تحدي"
          />
          <ServiceItem
            image={Book}
            title="مقالات المُعين"
            linkTitle="المقالات"
            linkHref="/sections/blogs"
            alt="مقال"
          />
          <ServiceItem
            image={Advice}
            title="نصائِـحُ المُعين"
            linkTitle="النصائح"
            linkHref="/sections/advices"
            alt="نصائح"
          />
          <ServiceItem
            image={Summarize}
            title="ملخّصات المُعين"
            linkTitle="الملخصّات"
            linkHref="/sections/summarizes"
            alt="تلخيص"
          />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default SectionsPage;
