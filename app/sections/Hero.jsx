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
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const logoVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-second h-screen" style={heroStyle}>
      <Navbar />
      <div className="flex flex-col gap-20 justify-center items-center h-full pb-14">
        <motion.div
          variants={logoVariants}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <Image className="w-88" src={Book} priority alt="text" layout="/" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 4 }}
          className="flex flex-col gap-6 items-center"
        >
          <Image
            className="w-88 h-auto"
            src={Text}
            priority
            alt="book"
            layout="/"
          />
          <Link
            href="/sections"
            className="bg-second  p-2 rounded w-[50%] text-center text-main"
          >
            <button id="swissra">التالـــي</button>
          </Link>
          <div className="flex gap-12 pt-4 text-second" id="swissra">
            <p>نصائح</p>
            <p>تلخيصات</p>
            <p>مقالات</p>
            <p>تحدّي</p>
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
