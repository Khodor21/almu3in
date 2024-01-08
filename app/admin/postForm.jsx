"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [article, setArticle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      subtitle,
      article,
    };

    try {
      const response = await axios.post(
        "https://almu3in-server.vercel.app/api/posts",
        data
      );

      if (response.status === 201) {
        toast.success("تم إنشاء المنشور بنجاح!");
      } else {
        toast.error("حدث خطأ ما أثناء إنشاء المنشور!");
      }
    } catch (err) {
      console.error(err);
      toast.error("حدث خطأ غير متوقع!");
    }
  };

  return (
    <div className="bg-second h-full py-4">
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4 mt-10">
          <h1 id="swissra" className="text-main">
            إضافة نصائح
          </h1>
          <div className="mb-4 flex flex-col gap-2 text-right mx-10">
            <label htmlFor="title" id="ibmBold" className="text-main">
              عنوان المنشور
            </label>
            <input
              type="text"
              name="title"
              id="swissra"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-right border-2 text-main rounded-lg py-2 px-4"
            />
          </div>
          <div className="mb-4 flex flex-col gap-2 text-right mx-10">
            <label htmlFor="subtitle" className="text-main" id="ibmBold">
              عنوان فرعي
            </label>
            <input
              type="text"
              name="subtitle"
              id="swissra"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="text-right border-2 text-main rounded-lg py-2 px-4"
            />
          </div>
          <div className="mb-4 flex flex-col gap-2 text-right mx-10">
            <label htmlFor="article" className="text-main" id="ibmBold">
              نص المنشور
            </label>
            <textarea
              name="article"
              id="swissra"
              onChange={(e) => setArticle(e.target.value)}
              rows="10"
              className="text-right border-2 text-main rounded-lg py-2 px-4"
              dir="rtl"
            />
          </div>
          <button
            id="ibmBold"
            type="submit"
            className="bg-main text-white rounded-lg py-2 px-4 w-[50%] mx-auto"
          >
            إنشاء المنشور
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
