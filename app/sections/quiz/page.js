import Link from "next/link";
import React from "react";

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
        <h3 className="text-red text-xl" id="ibmBold">
          :شروط التحدّي
        </h3>
        <div className="flex flex-col gap-6 text-third" id="swissra">
          <ul>تحديد وقت من يومك مسابقاً للتحدّي </ul>
          <ul>قراءة سورة السّجدة + تفسيرها من كتاب تفسير القرآن العظيم </ul>
          <ul>قراءة سورة السّجدة + تفسيرها من كتاب تفسير في ظلال القرآن </ul>
          <ul>
            قراءة سورة السّجدة + تفسيرها من تيسير الكريم الرحمن في تفسير كلام
            المنان
          </ul>{" "}
          <ul>
            تسجيل الفوائد / التدبرات / الاقتباسات / المعلومات الجديدة أثناء
            قراءة التفاسير
          </ul>
        </div>
      </div>
      <Link
        href="https://web.telegram.org/k/"
        className="text-main "
        id="ibmBold"
      >
        <p className="mt-16 underline">رابط التلغرام الخاصّ بالتحدّي</p>
      </Link>
    </div>
  );
};

export default quiz;
