"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Book from "../assets/MainImage.svg";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [message, setMessage] = useState("");
  const onSend = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://almu3in-server.vercel.app/api/message",
        {
          message,
        }
      );
      if (response.status === 201) {
        toast.success("!تم إرسال رسالة بنجاح");
      } else {
        toast.error("!حدث خطأ ما أثناء إرسال رسالة");
      }
    } catch (err) {
      console.error(err);
      toast.error("!حدث خطأ غير متوقع");
    }
  };
  const firstVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const secondVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="h-full bg-second ">
      <ToastContainer />
      <Navbar />
      <div className="flex flex-col gap-10 justify-center items-center h-full mx-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <Image layout="/" className="w-88" src={Book} priority alt="text" />
        </motion.div>
        <div className="flex flex-col gap-6 items-center">
          <motion.div
            className="text-center flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={firstVariants}
            transition={{ duration: 1 }}
          >
            <h1 className="text-main text-[32px]" id="swissra">
              مَوقِع المُعِين
            </h1>
            <h3 className="text-third text-[20px]" id="ibmBold">
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
            className="bg-main hover:border-2  hover:bg-second hover:text-main hover:shadow-xl py-2 px-10 rounded text-center text-second"
          >
            <button id="ibm" className="text-xl">
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
          <form onSubmit={onSend}>
            {" "}
            <div className="flex flex-col gap-2 text-right mx-2">
              <label className="text-main w-full" id="swissra">
                أفكارك وملاحظاتك تساعدنا على التطور{" "}
              </label>
              <input
                type="text"
                name="message"
                id="swissra"
                onChange={(e) => setMessage(e.target.value)}
                className="text-right border-2 text-main rounded-lg py-2 px-2 shadow-xl placeholder:text-main/80"
                placeholder="بانتظار أفكارك أو ملاحظاتك"
              />
              <button
                id="ibmBold"
                className="bg-third text-second w-full rounded p-2 shadow"
              >
                إرســــــــــــــــــــال
              </button>{" "}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
