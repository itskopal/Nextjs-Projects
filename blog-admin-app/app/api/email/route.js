import { connectDb } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";

const { NextResponse } = require("next/server");

const LoadDb = async () => {
  await connectDb();
};
LoadDb();

//Api endpoint for email
export async function POST(request) {
  try {
    const formData = await request.formData();

    const emailData = {
      email: `${formData.get("email")}`,
    };

    await EmailModel.create(emailData);

    return NextResponse.json({ success: true, msg: "Email Subscribed!" });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ success: false, msg: "Error" }, { status: 500 });
  }
}

//Api endpoint for get emails
export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

//Api endpoint for delete email
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted!!" });
}
