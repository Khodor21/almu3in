"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Text from "../assets/MainText.svg";
import Book from "../assets/MainImage.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const firstVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const secondVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const thirdVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen bg-second ">
      <Navbar />
      <div className="flex flex-col gap-16 justify-center items-center h-full mx-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <Image className="w-88" src={Book} priority alt="text" layout="/" />
        </motion.div>
        <div className="flex flex-col gap-6 items-center">
          <motion.div
            id="swissra"
            className="text-center flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={firstVariants}
            transition={{ duration: 1 }}
          >
            <h1 className="text-main text-[35px]">مَوقِع المُعِين</h1>
            <h3 className="text-third text-[21px]">
              طريقُك إلى عليّين ... يحتاجُ إلى المُعـين
            </h3>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={secondVariants}
          transition={{ duration: 2 }}
        >
          <Link
            width={400}
            href="/sections"
            className="bg-main py-2 px-10 rounded text-center text-second"
          >
            <button id="swissra" className="text-xl">
              التالـــي
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={firstVariants}
          transition={{ duration: 3 }}
        >
          <div
            className="flex justify-between min-w-96 pt-4 text-third px-6"
            id="swissra"
          >
            <p>نصائح</p>
            <p>تلخيصات</p>
            <p>مقالات</p>
            <p>تحدّي</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
