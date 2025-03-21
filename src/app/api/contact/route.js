import connectDB from "../../lib/databaseConnection";
import Contact from "../../models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, service, training, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, service, training, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send your message."] });
    }
  }
}
