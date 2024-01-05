"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Doc({ params }) {
  const id = params.slug;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`https://almu3in-server.vercel.app/api/posts/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  }, [id]);
  return (
    <div className="bg-second min-h-screen text-center pt-4">
      <div className="flex flex-col gap-4">
        <h1 id="swissra" className="text-main">
          {blog.title}
        </h1>
        <p id="ibmBold" className="text-third">
          {blog.subtitle}
        </p>
      </div>
      <div className="my-4 mx-2" id="swissra">
        <p className="mt-2">{blog.article}</p>
      </div>
    </div>
  );
}
