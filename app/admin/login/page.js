"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://almu3in-server.vercel.app/api/login",
        { username, password }
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        router.push("/admin");
        console.log("Login successful", username, password);
      } else {
        // Handle login error
        alert("Invalid credentials");
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="bg-second h-full py-4 text-center">
      <div className="flex flex-col gap-4 mt-6">
        <h1 id="swissra" className="text-main">
          تسجيل الدخول
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-10">
            <div className="mb-4 flex flex-col gap-2 text-right mx-10">
              <label htmlFor="username" id="ibmBold" className="text-main">
                اسم المُستخدِم
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="text-left border-2 text-main rounded-lg py-2 px-4"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2 text-right mx-10">
              <label htmlFor="password" className="text-main" id="ibmBold">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-left border-2 text-main rounded-lg py-2 px-4"
              />
            </div>
            <button
              id="ibmBold"
              type="submit"
              className="bg-main text-white rounded-lg py-2 px-4 w-[50%] mx-auto"
            >
              تسجيل الدخول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
