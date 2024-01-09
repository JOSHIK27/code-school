"use client";

import { signOut } from "next-auth/react";
export default function Profile({ src }) {
  return (
    <img
      onClick={() => {
        signOut();
      }}
      src={src}
      className="rounded-full mt-[4px]"
    ></img>
  );
}
