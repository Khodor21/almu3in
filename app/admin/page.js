import React from "react";
import PostForm from "./postForm";

const page = () => {
  return (
    <div className="bg-second text-center ">
      <div className="flex flex-col gap-4">
        <h1 id="swissra" className="text-main">
          مُشرِف المُعين
        </h1>
        <p id="ibmBold" className="text-third">
          تظهر هذه الصفحة فقط للمشرفين، لتُسهّل عليهم إضافة المعلومات إلى الموقع{" "}
        </p>
      </div>
      <PostForm />
    </div>
  );
};

export default page;
