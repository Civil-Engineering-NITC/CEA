import prismadb from "@/lib/prismadb";
// import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request
){
    try{

        const interviews = await prismadb.interviewExp.findMany();

        return NextResponse.json(interviews);

    } catch(error){
        console.log('[INTERVIEW_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}


export async function POST(
    req: Request
){
    try{

        // const { userId } = auth();
        const body = await req.json();

        const { name, rollno, phone, company, packages, desc, rating} = body;

        // if(!userId){
        //     return new NextResponse("Unauthenticated", {status: 401});
        // }
        if(!name){
            return new NextResponse("Name is required", {status: 400});
        }
        if(!rollno){
            return new NextResponse("rollno is required", {status: 400});
        }
        if(!phone){
            return new NextResponse("phone is required", {status: 400});
        }
        if(!company){
            return new NextResponse("company is required", {status: 400});
        }
        if(!packages){
            return new NextResponse("package is required", {status: 400});
        }
        if(!desc){
            return new NextResponse("desc is required", {status: 400});
        }
        if(!rating){
            return new NextResponse("rating is required", {status: 400});
        }

        const interview = await prismadb.interviewExp.create({
            data:{
                name: name, 
                rollno: rollno, 
                email: "vg7134@gmail.com", 
                phone: phone, 
                company: company,
                package: packages, 
                desc: desc,  
                rating: rating, 
            }
        })
        
    }catch(error){
        console.log("INTERVIEW_POST", error);
        return new NextResponse("Internal error", {status: 500});
    }
}