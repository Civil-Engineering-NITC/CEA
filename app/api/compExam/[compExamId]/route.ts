import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { compExamId : string } }
){
    try{
        if(!params.compExamId){
            return new NextResponse("comp exam Id is required", {status: 400});
        }

        const compExam = await prismadb.competitiveExam.findUnique({
            where:{
                id: params.compExamId
            }
        });

        const links = await prismadb.interviewExpLink.findMany({
          where:{
              interviewExpId: params.compExamId
          }
      });

      const responseData = {
          compExam,
          links
      };

      return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error){
        console.log('[COMPEXAM_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { compExamId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.compExamId) {
        return new NextResponse("comp exam id is required", { status: 400 });
      }
  
      const compExam = await prismadb.competitiveExam.delete({
        where: {
          id: params.compExamId
        }
      });
    
      return NextResponse.json(compExam);
    } catch (error) {
      console.log('[COMPEXAM_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { compExamId: string } }
  ) {
    try {
      const { userId } = auth();
  
      const body = await req.json();
  
      const { name, desc, regLink } = body;
  
      if(!userId){
        return new NextResponse("Unauthenticated", {status: 401});
    }
    if(!name){
        return new NextResponse("Name is required", {status: 400});
    }
    if(!desc){
        return new NextResponse("desc is required", {status: 400});
    }
    if(!regLink){
        return new NextResponse("regLink is required", {status: 400});
    }


      const compExam = await prismadb.competitiveExam.update({
        where: {
          id: params.compExamId
        },
        data: {
            name: name, 
            desc: desc, 
        }
      });
    
      return NextResponse.json(compExam);
    } catch (error) {
      console.log('[COMPEXAM_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };