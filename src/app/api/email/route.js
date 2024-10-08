import { Email } from "../email/Email";
// import { Resend } from "resend";
import { NextResponse } from "next/server";

// import connectResend from "../../lib/emailConnection";

import { getApiKey } from "../../lib/emailConnection";

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
// console.log("resend : ", resend);

export async function POST(request, response) {
  const resend = getApiKey();
  // console.log(" resend api key is : ", resend);

  try {
    const body = await request.json();
    console.log("body", body);

    const emailContent = Email({
      fullname: body.fullname,
      email: body.email,
      message: body.message,
    });

    //  Final email : thedatafoundation@gmail.com
    // resend
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
