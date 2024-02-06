import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

export async function GET(req: Request) {
  try {
    const activities = await prismadb.activity.findMany({
      include: {
        link: true,
      },
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.log("[ACTIVITIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, desc, type, linkData } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthenticated", { status: 401 });
    // }
    // if (!name) {
    //   return new NextResponse("name is required", { status: 400 });
    // }
    // if (!desc) {
    //   return new NextResponse("desc is required", { status: 400 });
    // }
    // if (!type) {
    //   return new NextResponse("type Data is required", { status: 400 });
    // }
    // if (!linkData) {
    //   return new NextResponse("link Data is required", { status: 400 });
    // }

    // const event = await prismadb.activity.create({
    //   data: {
    //     name: name,
    //     desc: desc,
    //     type: type,
    //     link: {
    //       create: linkData.map((link: any) => ({
    //         name: link.name,
    //         link: link.link,
    //       })),
    //     },
    //   },
    // });

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    try {
      // Hardcoded email data
      const emails = [
        {
          id: 1,
          email: "vg7134@gmail.com"
        },
        {
          id: 2,
          email: "vaibhav_b200642ce@nitc.ac.in"
        },
      ];
  
      // Loop through each email address and send an email
      const results = await Promise.all(emails.map(async (emailData) => {
        const { email, id } = emailData;
        const { data, error } = await resend.emails.send({
          from: 'Acme <civil.dept.nitc@gmail.com>',
          to: [email], // Send email to each email address
          subject: 'Hello world',
          html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
  
        return { id, email, data, error };
      }));
  
      // Handle errors and successes
      const errors = results.filter(result => result.error);
      const successes = results.filter(result => !result.error);
  
      if (errors.length > 0) {
        console.log(errors);
        return new NextResponse("Internal error in sending Emails length", { status: 500 });
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      return new NextResponse("Internal error in sending Emails", { status: 500 });
    }


    return new NextResponse("Activity created successfully", { status: 201 });
  } catch (error) {
    console.log("ACTIVITY_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
