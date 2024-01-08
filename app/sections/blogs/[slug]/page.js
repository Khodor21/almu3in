"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import BottomNavbar from "../../BottomNavbar";

export default function Doc({ params }) {
  const id = params.slug;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`https://almu3in-server.vercel.app/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  }, [id]);
  return (
    <div className="bg-second min-h-screen text-right">
      <div className="flex flex-col gap-4 pt-6 px-6">
        <div className="flex justify-between">
          <Link href="/sections/blogs">
            <FaArrowLeft className="w-6 h-6 text-second bg-main p-1 rounded-full" />
          </Link>
          <h1 id="swissra" className="text-main text-center">
            {blog.title}
          </h1>
        </div>

        <p id="ibmBold" className="text-third">
          {blog.subtitle}
        </p>
      </div>
      <div id="jazeera" className="mt-2 mb-20 px-6">
        <p className="text-area my-lh-1.8" dir="rtl">
          {blog.article}
        </p>
      </div>
      <BottomNavbar />
    </div>
  );
}
