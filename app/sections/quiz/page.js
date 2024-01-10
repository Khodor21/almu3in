import Link from "next/link";
import React from "react";
import { MdTask } from "react-icons/md";

const challengeSteps = [
  {
    text: "تحديد وقت من يومك مسابقاً للتحدّي",
  },
  {
    text: "قراءة سورة السّجدة + تفسيرها من كتاب تفسير القرآن العظيم",
  },
  {
    text: "قراءة سورة السّجدة + تفسيرها من كتاب تفسير في ظلال القرآن",
  },
  {
    text: " قراءة سورة السّجدة + تفسيرها من تيسير الكريم الرحمن في تفسير كلام المنان",
  },
  {
    text: "تسجيل الفوائد / التدبرات / الاقتباسات / المعلومات الجديدة أثناء قراءة التفاسير",
  },
];

const quiz = () => {
  return (
    <div className="bg-second text-center p-6">
      <div className="flex flex-col gap-4">
        <h1 id="swissra" className="text-main">
          تحدّي المُعين
        </h1>
        <p id="ibmBold" className="text-third">
          تحدّي أسبوعي / يومي تتنوع فيه المنافسة، بين حفظٍ وقراءة وتدبر ويوميّات
          وعادات
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1
          className="mt-8 text-2xl border-b-4 w-fit mx-auto text-main"
          id="ibmBold"
        >
          تحدّي تفسير سورة السّجدة
        </h1>
        <h3 className="text-red text-lg" id="ibmBold">
          :شروط التحدّي
        </h3>
        <div className="flex flex-col gap-6 text-third" id="swissra">
          {challengeSteps.map((step, idx) => (
            <div
              id={idx}
              className="bg-white border-[0.5px] shadow-lg px-4 py-2 rounded relative"
            >
              <MdTask className="absolute bg-third text-second p-1 top-[-10px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full" />
              <p className="mt-7">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="https://t.me/islamicwritess"
        className="text-main "
        id="ibmBold"
      >
        <p className="mt-16">
          تجدون ملفّات التفاسير ورابط المشاركة في قناة التلغرام
        </p>
        <p className="underline mt-2">رابط التلغرام الخاصّ بالتحدّي</p>
      </Link>
    </div>
  );
};

export default quiz;
