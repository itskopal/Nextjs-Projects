"use client";
import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Benett",
    author_img: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Benett",
        author_img: "/author_img.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={onSubmitHandler}
        className="pt-5 px-5 sm:pt-12 sm:pl-16"
      >
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="img"
            width={140}
            height={70}
            className="mt-4 cursor-pointer"
          />
        </label>
        <input
          type="file"
          id="image"
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <p className="text-xl mt-4">Blog Title</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          placeholder="Type here"
          required
        />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Write content here"
          rows={6}
          required
          name="description"
          onChange={onChangeHandler}
          value={data.description}
        />

        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white cursor-pointer"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default page;
