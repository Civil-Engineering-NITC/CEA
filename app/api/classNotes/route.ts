import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request
){
    try{

        const classNotes = await prismadb.classNotes.findMany();

        return NextResponse.json(classNotes);

    } catch(error){
        console.log('[CLASSNOTES_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}


export async function POST(
    req: Request
){
    try{

        const { userId } = auth();
        const body = await req.json();

        const { subject, linkData } = body;

        if(!userId){
            return new NextResponse("Unauthenticated", {status: 401});
        }
        if(!subject){
            return new NextResponse("subject is required", {status: 400});
        }
        if(!linkData){
            return new NextResponse("link Data is required", {status: 400});
        }

        const classNote = await prismadb.classNotes.create({
            data:{
                subject: subject,
                link:{
                    create: linkData.map((link : any) => ({
                        name: link.name,
                        link: link.link,
                    }))
                }
            }
        })
        
    }catch(error){
        console.log("CLASSNOTES_POST", error);
        return new NextResponse("Internal error", {status: 500});
    }
}