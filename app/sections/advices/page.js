"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";

const advice = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://almu3in-server.vercel.app/api/posts"
      );
      if (response.status === 200) {
        setPosts(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  const postVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-second h-screen text-center pt-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col gap-4">
          <h1 id="swissra" className="text-main">
            نصائحُ المُعين
          </h1>
          <p id="ibmBold" className="text-third">
            جمعنا لك هنا نصائح لتكون لَكَ إن شاء الله خيرُ معينٍ في طريق الثَبات
            و طلب اعلم
          </p>
        </div>
      </motion.div>
      <motion.div
        className="pt-10"
        initial="hidden"
        animate="visible"
        variants={postVariants}
        transition={{ duration: 2 }}
      >
        {posts.map((post, index) => (
          <Link href={`/sections/advices/${post._id}`} key={post._id}>
            <motion.div
              id="ibmBold"
              className="flex flex-col float-end mx-6 mb-6 text-right bg-third w-[80%] rounded"
              transition={{
                duration: 2 + index * 0.2,
                delay: 0,
              }}
            >
              <h1 className="m-2 text-xl text-second">{post.title}</h1>
              <h3 className="m-2 text-second/70">{post.subtitle}</h3>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default advice;
