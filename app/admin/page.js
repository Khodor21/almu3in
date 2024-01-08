"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PostForm from "./postForm";

export default function page() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  async function validateCredentials(username, password) {
    const response = await fetch(
      "https://almu3in-server.vercel.app/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();
    return data.message === "Login successful";
  }

  useEffect(() => {
    async function checkLogin() {
      try {
        const [username, password] = await Promise.all([
          localStorage.getItem("username"),
          localStorage.getItem("password"),
        ]);

        if (username && password) {
          const isAuthenticated = await validateCredentials(username, password);
          setIsLoggedIn(isAuthenticated);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login:", error);
        router.push("/admin/login");
      }
    }

    checkLogin();
  }, [router]);

  if (!isLoggedIn) {
    router.push("/admin/login");
    return null;
  }

  return (
    <div className="bg-second text-center ">
      <div className="flex flex-col gap-4 mt-6">
        <h1 id="swissra" className="text-main">
          مُشرِف المُعين
        </h1>
        <p id="ibmBold" className="text-third">
          تظهر هذه الصفحة فقط للمشرفين، لتُسهّل عليهم إضافة المعلومات إلى الموقع{" "}
        </p>
        <PostForm />
      </div>
    </div>
  );
}
