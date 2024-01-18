import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { classNoteId : string } }
){
    try{
        if(!params.classNoteId){
            return new NextResponse("comp exam Id is required", {status: 400});
        }

        const classNote = await prismadb.classNotes.findUnique({
            where:{
                id: params.classNoteId
            }
        });

        const links = await prismadb.interviewExpLink.findMany({
          where:{
              interviewExpId: params.classNoteId
          }
      });

      const responseData = {
          classNote,
          links
      };

      return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error){
        console.log('[CLASSNOTE_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { classNoteId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.classNoteId) {
        return new NextResponse("classnote id is required", { status: 400 });
      }
  
      const classNote = await prismadb.classNotes.delete({
        where: {
          id: params.classNoteId
        }
      });
    
      return NextResponse.json(classNote);
    } catch (error) {
      console.log('[CLASSNOTE_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { classNoteId: string } }
  ) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { subject } = body;

        if(!userId){
            return new NextResponse("Unauthenticated", {status: 401});
        }
        if(!subject){
            return new NextResponse("subject is required", {status: 400});
        }


      const classNote = await prismadb.classNotes.update({
        where: {
          id: params.classNoteId
        },
        data:{
            subject: subject
        }
      });
    
      return NextResponse.json(classNote);
    } catch (error) {
      console.log('[COMPEXAM_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };