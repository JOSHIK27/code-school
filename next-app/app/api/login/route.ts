import { prisma } from "@/lib/client";

export async function POST(request: Request) {
    const body = await request.json()
    const respone1 = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if(!respone1) {
        await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                image: body.image,
            }
        })
    }
    console.log(respone1);
    return  new Response('hii');
}

