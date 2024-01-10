"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DeleteConfirmationModal from "./delete";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";

const advice = () => {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  const adminUsername = "almu3inadmin";
  const adminPassword = "almu3inadmin123";

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername === adminUsername && storedPassword === adminPassword) {
      setIsAdmin(true);
    }
  }, []);

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

  const handleDeletePost = (postId) => {
    setShowDeleteModal(true);
    setPostIdToDelete(postId);
  };

  const postVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="text-right ">
      <div className="pt-4 pb-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {showDeleteModal && (
            <DeleteConfirmationModal
              showModal={showDeleteModal}
              postIdToDelete={postIdToDelete}
              onConfirm={() => {
                axios
                  .delete(
                    `https://almu3in-server.vercel.app/api/posts/${postIdToDelete}`
                  )
                  .then(() => {
                    setShowDeleteModal(false);
                    getPosts();
                  })
                  .catch((err) => console.error(err));
              }}
              onCancel={() => setShowDeleteModal(false)}
            />
          )}{" "}
          <div className="flex flex-col gap-4 px-6">
            <div className="flex justify-between">
              <Link href="/sections">
                <FaArrowLeft className="w-6 h-6 text-second bg-main p-1 rounded-full" />
              </Link>
              <h1 id="swissra" className="text-main text-center">
                نصائحُ المُعين
              </h1>
            </div>
            <p id="ibmBold" className="text-third">
              جمعنا لك هنا نصائح لتكون لَكَ إن شاء الله خيرُ معينٍ في طريق
              الثَبات و طلب العلم
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-[99%]">
        <motion.div
          className="pt-6"
          initial="hidden"
          animate="visible"
          variants={postVariants}
          transition={{ duration: 2 }}
        >
          {posts.map((post) => (
            <div
              key={post._id}
              id="ibmBold"
              className="flex flex-col float-end mx-6 mb-6 text-right bg-third w-[80%] rounded"
            >
              <Link href={`/sections/advices/${post._id}`}>
                <h1 className="m-2 text-xl text-second">{post.title}</h1>
                <h3 className="m-2 text-second/70">{post.subtitle}</h3>
              </Link>
              <div className="flex flex-row-reverse justify-between">
                {isAdmin && (
                  <button
                    className="text-second m-2"
                    onClick={() => handleDeletePost(post._id)}
                  >
                    <ImBin2 />
                  </button>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default advice;
