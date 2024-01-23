import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request
){
    try{

        const coding = await prismadb.coding.findMany();

        return NextResponse.json(coding);

    } catch(error){
        console.log('[CODING_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}


export async function POST(
    req: Request
){
    try{

        const { userId } = auth();
        const body = await req.json();

        const { topic, desc, linkData} = body;

        if(!userId){
            return new NextResponse("Unauthenticated", {status: 401});
        }
        if(!topic){
            return new NextResponse("topic is required", {status: 400});
        }
        if(!desc){
            return new NextResponse("desc is required", {status: 400});
        }
        if(!linkData){
            return new NextResponse("link data is required", {status: 400});
        }

        const code = await prismadb.coding.create({
            data:{
                topic: topic,
                desc: desc,
                link:{
                    create: linkData.map((link : any) => ({
                        name: link.name,
                        link: link.link,
                    }))
                }
            }
        })
        
    }catch(error){
        console.log("CODING_POST", error);
        return new NextResponse("Internal error", {status: 500});
    }
}