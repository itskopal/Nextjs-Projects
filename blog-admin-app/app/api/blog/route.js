import { connectDb } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

import { writeFile } from "fs/promises";

const { NextResponse } = require("next/server");

const LoadDb = async () => {
  await connectDb();
};
LoadDb();

// export async function GET(request) {
//   //console.log("Blog get hit");
//   return NextResponse.json({ msg: "API Working" });
// }

// export async function POST(request) {
//   const formData = await request.formData();
//   const timestamp = Date.now();

//   const image = formData.get("image");
//   const imageByteData = await image.arrayBuffer();
//   const buffer = Buffer.from(imageByteData);
//   const path = `./public/${timestamp}_${image.name}`;
//   await writeFile(path, buffer);
//   const imgUrl = `/${timestamp}_${image.name}`;

//   const blogData = {
//     title: `${formData.get("title")}`,
//     description: `${formData.get("description")}`,
//     category: `${formData.get("category")}`,
//     author: `${formData.get("author")}`,
//     image: `${imgUrl}`,
//     author_img: `${formData.get("author_img")}`,
//   };

//   await BlogModel.create(blogData);

//   console.log(imgUrl, "blog saved or img");

//   return NextResponse.json({ success: true, msg: "Blog Added" });
// }


export async function POST(request) {
  try {
    const formData = await request.formData();

    const image = formData.get("image");
    if (!image || typeof image.arrayBuffer !== "function") {
      return NextResponse.json(
        { success: false, msg: "No image uploaded" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // Ensure public folder exists
    const fs = require("fs");
    const publicFolder = "./public";
    if (!fs.existsSync(publicFolder)) {
      fs.mkdirSync(publicFolder);
    }

    const path = `${publicFolder}/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      author_img: formData.get("author_img"),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { success: false, msg: "Error adding blog" },
      { status: 500 }
    );
  }
}

