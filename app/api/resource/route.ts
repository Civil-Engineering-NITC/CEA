import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const resources = await prismadb.resources.findMany();

    return NextResponse.json(resources);
  } catch (error) {
    console.log("[RESOURCES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { topic, type, linkData, desc } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!topic) {
      return new NextResponse("topic is required", { status: 400 });
    }
    if (!type) {
      return new NextResponse("type is required", { status: 400 });
    }
    if (!linkData) {
      return new NextResponse("link Data is required", { status: 400 });
    }

    if (!desc) {
      return new NextResponse("Description is required", { status: 400 });
    }

    const classNote = await prismadb.resources.create({
      data: {
        topic: topic,
        type: type,
        desc: desc,
        link: {
          create: linkData.map((link: any) => ({
            name: link.name,
            link: link.link,
          })),
        },
      },
    });

    return new NextResponse("Resource created successfully", { status: 201 });
  } catch (error) {
    console.log("RESOURCE_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
