"use client";

interface ProfileProps {
  src: string;
}
import { signOut } from "next-auth/react";
export default function Profile({ src }: ProfileProps) {
  return (
    <div>
      <img
        onClick={() => {
          signOut();
        }}
        alt="not found"
        src={src}
        className="rounded-full mt-[4px] w-8"
      ></img>
    </div>
  );
}
