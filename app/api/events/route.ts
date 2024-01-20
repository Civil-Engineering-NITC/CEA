import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request
){
    try{

        const events = await prismadb.events.findMany();

        return NextResponse.json(events);

    } catch(error){
        console.log('[EVENTS_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}


export async function POST(
    req: Request
){
    try{

        const { userId } = auth();
        const body = await req.json();

        const { name, desc} = body;

        if(!userId){
            return new NextResponse("Unauthenticated", {status: 401});
        }
        if(!name){
            return new NextResponse("name is required", {status: 400});
        }
        if(!desc){
            return new NextResponse("desc is required", {status: 400});
        }

        const event = await prismadb.events.create({
            data:{
                name: name, 
                desc: desc, 
            }
        })
        
    }catch(error){
        console.log("EVENT_POST", error);
        return new NextResponse("Internal error", {status: 500});
    }
}