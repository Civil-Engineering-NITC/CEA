import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { activityId : string } }
){
    try{
        if(!params.activityId){
            return new NextResponse("event Id is required", {status: 400});
        }

        const activity = await prismadb.activity.findUnique({
            where:{
                id: params.activityId
            }
        });

        const links = await prismadb.activityLink.findMany({
          where:{
            activityId: params.activityId
          }
      });

      const responseData = {
        activity,
        links
    };

    return new NextResponse(JSON.stringify(responseData), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error){
        console.log('[ACTIVITY_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { activityId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.activityId) {
        return new NextResponse("event id is required", { status: 400 });
      }
  
      const activity = await prismadb.activity.delete({
        where: {
          id: params.activityId
        }
      });
    
      return NextResponse.json(activity);
    } catch (error) {
      console.log('[ACTIVITY_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function PATCH(
    req: Request,
    { params }: { params: { activityId: string } }
  ) {
    try {
      const { userId } = auth();
  
      const body = await req.json();
  
      const { name, type, desc } = body;
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if(!name){
        return new NextResponse("name is required", {status: 400});
    }
      if(!type){
        return new NextResponse("type is required", {status: 400});
    }
    if(!desc){
        return new NextResponse("desc is required", {status: 400});
    }


      const activity = await prismadb.activity.update({
        where: {
          id: params.activityId
        },
        data: {
            name: name,
            type: type, 
            desc: desc, 
        }
      });
    
      return NextResponse.json(activity);
    } catch (error) {
      console.log('[ACTIVITY_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };