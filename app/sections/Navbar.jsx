"use client";

import React, { useState } from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import MainLogo from "../assets/Al-Mu3in.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const topDataVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <nav className="py-4 px-2 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topDataVariants}
          transition={{ duration: 1.2 }}
        >
          {" "}
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex pl-4">
              <Image
                src={MainLogo}
                className="lg:w-20 md:w-16 w-12 mr-2"
                alt="خضر حسن"
              />
            </div>
            <div>
              <button className="bg-second rounded-xl shadow-xl text-main flex">
                <Link href="tel:+961-71708103">
                  <p className={`my-2 mx-4 flex gap-1`} id="swissra">
                    قناة التلغرام
                    <PiTelegramLogoLight className="mt-[2px] text-xl" />
                  </p>
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
