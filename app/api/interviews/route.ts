import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const interviews = await prismadb.interviewExp.findMany();

    return NextResponse.json(interviews);
  } catch (error) {
    console.log("[INTERVIEW_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    console.log(body);

    const {
      name,
      rollno,
      phone,
      email,
      company,
      packages,
      desc,
      rating,
      linkData,
    } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!rollno) {
      return new NextResponse("rollno is required", { status: 400 });
    }
    if (!phone) {
      return new NextResponse("phone is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("email is required", { status: 400 });
    }
    if (!company) {
      return new NextResponse("company is required", { status: 400 });
    }
    if (!packages) {
      return new NextResponse("package is required", { status: 400 });
    }
    if (!desc) {
      return new NextResponse("desc is required", { status: 400 });
    }
    if (!rating) {
      return new NextResponse("rating is required", { status: 400 });
    }
    if (!linkData) {
      return new NextResponse("Links required", { status: 400 });
    }

    const interview = await prismadb.interviewExp.create({
      data: {
        name: name,
        rollno: rollno,
        email: email,
        phone: phone,
        company: company,
        package: packages,
        desc: desc,
        rating: rating,
        link: {
          create: linkData.map((link: any) => ({
            name: link.name,
            link: link.link,
          })),
        },
      },
    });

    return new NextResponse("Interview created successfully", { status: 201 });
  } catch (error: any) {
    console.log("INTERVIEW_POST", error);
    if (error.code === "P2002") {
      console.log(error.meta.target[0]);
      return new NextResponse(error.meta.target[0], { status: 500 });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }
}
