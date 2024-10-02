import { Email } from "../email/Email";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request, response) {
  try {
    const body = await request.json();
    console.log("body", body);

    const emailContent = Email({
      fullname: body.fullname,
      email: body.email,
      message: body.message,
    });

    //  Final email : thedatafoundation@gmail.com
    const { data, error } = await resend.emails.send({
      from: "Forms <form@esanalysis.com>",
      to: ["teamdevusa@gmail.com"],
      subject: "New contact form received",
      react: emailContent,
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error });
  }
}
