"use client";

import { useRouter } from "next/navigation";
export default function SubNav() {
  const router = useRouter();
  return (
    <div className="flex pt-[13px]">
      <h1
        onClick={() => {
          router.push("/");
        }}
        className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12"
      >
        Home
      </h1>
      <h1
        onClick={() => {
          router.push("/courses");
        }}
        className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12"
      >
        Courses
      </h1>
      <h1
        onClick={() => {
          router.push("/practice");
        }}
        className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12"
      >
        Practice
      </h1>
      <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        About
      </h1>
    </div>
  );
}
