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
    return NextResponse.json(
      { success: false, msg: "Error" },
      { status: 500 }
    );
  }
}


//Api endpoint for get blogs
// export async function GET(request) {
//   const blogId = request.nextUrl.searchParams.get("id");
//   if (blogId) {
//     const blog = await BlogModel.findById(blogId);
//     return NextResponse.json(blog);
//   } else {
//     const blogs = await BlogModel.find({});
//     return NextResponse.json({ blogs });
//   }
// }

