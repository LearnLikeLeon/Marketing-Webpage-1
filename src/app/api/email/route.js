import { Email } from "../email/Email";
import { NextResponse } from "next/server";
import { getApiKey } from "../../lib/emailConnection";

export async function POST(request, response) {
  const emailNotification = getApiKey();

  try {
    const body = await request.json();
    console.log("body", body);

    const emailContent = Email({
      fullname: body.fullname,
      email: body.email,
      message: body.message,
    });

    const { data, error } = await emailNotification.emails.send({
      from: "Forms <form@esanalysis.com>",
      to: ["thedatafoundation@gmail.com"],
      subject: "New contact form received",
      react: emailContent,
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error });
  }
}
