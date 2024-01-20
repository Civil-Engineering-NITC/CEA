import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { eventId : string } }
){
    try{
        if(!params.eventId){
            return new NextResponse("event Id is required", {status: 400});
        }

        const event = await prismadb.events.findUnique({
            where:{
                id: params.eventId
            }
        });

        const links = await prismadb.eventsLink.findMany({
          where:{
              eventId: params.eventId
          }
      });

      const responseData = {
        event,
        links
    };

    return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error){
        console.log('[EVENT_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { eventId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.eventId) {
        return new NextResponse("event id is required", { status: 400 });
      }
  
      const event = await prismadb.events.delete({
        where: {
          id: params.eventId
        }
      });
    
      return NextResponse.json(event);
    } catch (error) {
      console.log('[EVENT_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { eventId: string } }
  ) {
    try {
      const { userId } = auth();
  
      const body = await req.json();
  
      const { regLink, desc } = body;
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if(!regLink){
        return new NextResponse("Reglink is required", {status: 400});
    }
    if(!desc){
        return new NextResponse("desc is required", {status: 400});
    }


      const event = await prismadb.events.update({
        where: {
          id: params.eventId
        },
        data: {
            regLink: regLink, 
            desc: desc, 
        }
      });
    
      return NextResponse.json(event);
    } catch (error) {
      console.log('[EVENT_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };