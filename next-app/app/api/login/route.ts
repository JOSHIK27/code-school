import { NextResponse } from "next/server";
import { prisma } from "@/lib/client";
export async function GET(request: Request) {
    console.log("in server");
    await prisma.user.create({
        data: {
          email: "joshik@gmail.com",
          name: "joshik",
        },
      });

    return  new Response('hii');
}

