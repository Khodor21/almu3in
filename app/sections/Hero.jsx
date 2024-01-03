"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Text from "../assets/MainText.svg";
import Book from "../assets/MainImage.svg";
import Background from "../assets/Background.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${Background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
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
    <div className="bg-second" style={heroStyle}>
      <Navbar />
      <div className="flex flex-col gap-20 justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <Image className="w-88" src={Book} priority alt="text" layout="/" />
        </motion.div>
        <div className="flex flex-col gap-6 items-center">
          {" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={firstVariants}
            transition={{ duration: 1 }}
          >
            <Image
              className="w-88 h-auto mx-2"
              src={Text}
              priority
              alt="book"
              layout="/"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={secondVariants}
            transition={{ duration: 2 }}
          >
            <Link
              href="/sections"
              className="bg-second  p-2 rounded w-[50%] text-center text-main"
            >
              <button id="swissra">التالـــي</button>
            </Link>{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={firstVariants}
            transition={{ duration: 3 }}
          >
            <div className="flex gap-12 pt-4 text-second" id="swissra">
              <p>نصائح</p>
              <p>تلخيصات</p>
              <p>مقالات</p>
              <p>تحدّي</p>
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
