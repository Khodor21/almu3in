import Image from "next/image";
import React from "react";
import Building from "../../assets/Building.svg";
import BottomNavbar from "../BottomNavbar";
const summarizes = () => {
  return (
    <div className="bg-second text-center pt-4">
      <div className="flex flex-col gap-4">
        <h1 id="swissra" className="text-main">
          ملخصات المُعين
        </h1>
        <p id="ibmBold" className="text-third">
          ملخصات علمية منهجية مقسّمة وفق كل علم، تتنوع بين محاضرات بنائية وكتب
          شرعية وتثقيفية وجلسات تزكويّة{" "}
        </p>
      </div>
      <div className="mt-10">
        <Image
          layout="/"
          src={Building}
          alt="Loading..."
          className="mx-auto w-72"
        />
        <p className="text-main text-2xl" id="swissra">
          ...جاري إعداد هذه الصفحة
        </p>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default summarizes;
