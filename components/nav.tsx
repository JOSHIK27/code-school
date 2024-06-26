"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Btn from "./btn";
import Profile from "./profile";
import Link from "next/link";
export default function Nav() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex flex-col sm:flex-row pt-[13px] justify-evenly">
      <h1
        className={`text-[16px]  mb-4 font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12`}
      >
        <Link href={"/"}>Home</Link>
      </h1>
      <h1 className="text-[16px] mb-4 font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/courses"}>Courses</Link>
      </h1>
      <h1 className="text-[16px] mb-4 font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/practice"}>Practice</Link>
      </h1>
      <h1 className="text-[16px] mb-4 font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/about"}>About</Link>
      </h1>
      <button className="font-outfit mb-4 font-semibold mx-4 bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
        My Learning
      </button>
      {session && session.data && session.data.user ? (
        <Profile
          src={session.data.user.image ? session.data.user.image : "undefined"}
        />
      ) : (
        <Btn />
      )}
    </div>
  );
}
