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
    <div className="bg-second h-full py-4 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-4/12">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          تسجيل الدخول
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              اسم المُستخدِم
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-main text-white rounded-lg py-2 px-4 w-full"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
