"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "https://almu3in-server.vercel.app/api/blogs"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  const postVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-second h-screen pt-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col gap-4 px-6">
          <div className="flex justify-between">
            <Link href="/sections">
              <FaArrowLeft className="w-6 h-6 text-second bg-main p-1 rounded-full" />
            </Link>
            <h1 id="swissra" className="text-main text-center">
              مقالات المُعين
            </h1>
          </div>

          <p id="ibmBold" className="text-third text-right">
            ستجد هنا إن شاء الله مقالات علمية بسيطة، سهلة القراءة كثيرة الفائدة
            متنوعة العناوين
          </p>
        </div>
      </motion.div>
      <div className="h-[99%]">
        <motion.div
          className="pt-6"
          initial="hidden"
          animate="visible"
          variants={postVariants}
          transition={{ duration: 2 }}
        >
          {blogs.map((blog) => (
            <Link href={`/sections/blogs/${blog._id}`} key={blog._id}>
              <div
                id="ibmBold"
                className="flex flex-col float-end mx-6 mb-6 text-right bg-third w-[80%] rounded"
              >
                <h1 className="m-2 text-xl text-second">{blog.title}</h1>
                <h3 className="m-2 text-second/70">{blog.subtitle}</h3>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default blogs;
