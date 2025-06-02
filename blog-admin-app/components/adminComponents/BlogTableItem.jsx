import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ item }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900
         whitespace-nowrap"
      >
        <Image
          src={item.author_img ? item.author_img : assets.profile_icon}
          width={40}
          height={40}
        />
        <p>{item.author ? item.author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{item.title ? item.title : "no title"}</td>
      <td className="px-6 py-4">{"21 Jan 2025"}</td>
      <td className="px-6 py-4 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;
