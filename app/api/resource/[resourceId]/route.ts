import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { resourceId: string } }
) {
  try {
    if (!params.resourceId) {
      return new NextResponse("comp exam Id is required", { status: 400 });
    }

    const resource = await prismadb.resources.findUnique({
      where: {
        id: params.resourceId,
      },
    });

    const links = await prismadb.resourceLink.findMany({
      where: {
        resourcesId: params.resourceId,
      },
    });

    const responseData = {
      resource,
      links,
    };

    return new NextResponse(JSON.stringify(responseData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("[RESOURCE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { resourceId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.resourceId) {
      return new NextResponse("classnote id is required", { status: 400 });
    }

    const resource = await prismadb.resources.delete({
      where: {
        id: params.resourceId,
      },
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.log("[RESOURCE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { resourceId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { topic, type } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!topic) {
      return new NextResponse("topic is required", { status: 400 });
    }
    if (!type) {
      return new NextResponse("type is required", { status: 400 });
    }

    const resource = await prismadb.resources.update({
      where: {
        id: params.resourceId,
      },
      data: {
        topic: topic,
        type: type,
      },
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.log("[RESOURCE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
