import Link from "next/link";

export default function SubNav() {
  return (
    <div className="flex pt-[13px]">
      <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/"}>Home</Link>
      </h1>
      <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/courses"}>Courses</Link>
      </h1>
      <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/practice"}>Practice</Link>
      </h1>
      <h1 className="text-[16px] font-outfit font-semibold text-[#797979] hover:text-[#0052C3] cursor-pointer mx-12">
        <Link href={"/about"}>About</Link>
      </h1>
    </div>
  );
}
