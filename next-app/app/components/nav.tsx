import { getServerSession } from "next-auth/next";
import Btn from "./btn";
import { options } from "../api/auth/[...nextauth]/options";
import Profile from "./profile";
export default async function Nav() {
  const session = await getServerSession(options);
  const resp = await fetch("http://localhost:3000/api/login", {
    method: "GET",
  });
  return (
    <div className="h-8 flex justify-between mt-4">
      <h1 className="text-[16px] pt-[13px] ml-4 font-outfit font-bold">
        CODE SCHOOL
      </h1>
      <div className="flex pt-[13px]">
        <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
          Home
        </h1>
        <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
          Courses
        </h1>
        <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
          Practice
        </h1>
        <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
          About
        </h1>
      </div>
      <div className="flex">
        <button className="font-outfit font-semibold mx-4 bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
          My Learning
        </button>
        {session && session.user ? (
          <Profile src={session?.user.image} />
        ) : (
          <Btn />
        )}
      </div>
    </div>
  );
}
