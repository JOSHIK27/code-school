import { getServerSession } from "next-auth/next";
import Btn from "./btn";
import { options } from "../api/auth/[...nextauth]/options";
import Profile from "./profile";
import SubNav from "./subNav";
export default async function Nav() {
  const session = await getServerSession(options);
  if (session && session.user) {
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }),
    });
  }

  return (
    <div className="h-8 flex justify-between mt-4">
      <h1 className="text-[16px] pt-[13px] ml-4 font-outfit font-bold">
        CODE SCHOOL
      </h1>
      <SubNav />
      <div className="flex">
        <button className="font-outfit font-semibold mx-4 bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
          My Learning
        </button>
        {session && session.user ? (
          <Profile src={session.user.image ?? "defaultImageURL"} />
        ) : (
          <Btn />
        )}
      </div>
    </div>
  );
}
