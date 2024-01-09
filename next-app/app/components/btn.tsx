"use client";
import { signIn } from "next-auth/react";

export default function Btn() {
  return (
    <button
      onClick={async () => {
        signIn();
      }}
      className="font-outfit font-semibold mx-4 bg-[#0052C4] text-white h-[40px] w-[90px] rounded-full"
    >
      Login
    </button>
  );
}
