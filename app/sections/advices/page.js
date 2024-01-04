"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="bg-second h-screen text-center pt-4">
      <div className="flex flex-col gap-4">
        <h1 id="swissra" className="text-main">
          نصائحُ المُعين
        </h1>
        <p id="ibmBold" className="text-third">
          جمعنا لك هنا نصائح لتكون لَكَ إن شاء الله خيرُ معينٍ في طريق الثَبات و
          طلب اعلم
        </p>
      </div>
      <div className="pt-10">
        {posts.map((post) => (
          <div
            key={post._id}
            id="ibmBold"
            className="flex flex-col float-end mx-6 mb-6 text-right bg-third w-[80%] rounded"
          >
            <h1 className="m-2 text-xl text-second">{post.title}</h1>
            <h3 className="m-2 text-second/70">{post.subtitle}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default advice;
