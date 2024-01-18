import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { codingId : string } }
){
    try{
        if(!params.codingId){
            return new NextResponse("comp exam Id is required", {status: 400});
        }

        const coding = await prismadb.coding.findUnique({
            where:{
                id: params.codingId
            }
        });

        const links = await prismadb.interviewExpLink.findMany({
          where:{
              interviewExpId: params.codingId
          }
      });

      const responseData = {
          coding,
          links
      };

      return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error){
        console.log('[CODING_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { codingId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.codingId) {
        return new NextResponse("coding id is required", { status: 400 });
      }
  
      const coding = await prismadb.coding.delete({
        where: {
          id: params.codingId
        }
      });
    
      return NextResponse.json(coding);
    } catch (error) {
      console.log('[CODING_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { codingId: string } }
  ) {
    try {
      const { userId } = auth();
  
      const body = await req.json();
  
      const { topic, desc} = body;
  
      if(!userId){
        return new NextResponse("Unauthenticated", {status: 401});
    }
    if(!topic){
        return new NextResponse("topic is required", {status: 400});
    }
    if(!desc){
        return new NextResponse("desc is required", {status: 400});
    }


      const coding = await prismadb.coding.update({
        where: {
          id: params.codingId
        },
        data:{
            topic: topic,
            desc: desc
        }
      });
    
      return NextResponse.json(coding);
    } catch (error) {
      console.log('[COMPEXAM_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };