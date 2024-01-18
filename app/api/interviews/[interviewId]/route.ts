import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { interviewId : string } }
){
    try {
        if (!params.interviewId) {
            return new NextResponse("Interview Id is required", {status: 400});
        }

        const interview = await prismadb.interviewExp.findUnique({
            where:{
                id: params.interviewId
            }
        });

        const links = await prismadb.interviewExpLink.findMany({
            where:{
                interviewExpId: params.interviewId
            }
        });

        const responseData = {
            interview,
            links
        };

        return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error) {
        console.log('[INTERVIEW_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { interviewId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.interviewId) {
        return new NextResponse("interview id is required", { status: 400 });
      }
  
      const interview = await prismadb.interviewExp.delete({
        where: {
          id: params.interviewId
        }
      });
    
      return NextResponse.json(interview);
    } catch (error) {
      console.log('[INTERVIEW_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { interviewId: string } }
  ) {
    try {
      const { userId } = auth();
  
      const body = await req.json();
  
      const { name, rollno, phone, company, packages, desc, rating} = body;
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
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


      const interview = await prismadb.interviewExp.update({
        where: {
          id: params.interviewId
        },
        data: {
            name: name, 
            rollno: rollno, 
            email: "vg7134@gmail.com", 
            phone: phone, 
            company: company,
            package: packages, 
            desc: desc,  
            rating: rating,
        }
      });
    
      return NextResponse.json(interview);
    } catch (error) {
      console.log('[INTERVIEW_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };