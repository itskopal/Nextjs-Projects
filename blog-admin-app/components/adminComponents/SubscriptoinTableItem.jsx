import React from "react";

const SubscriptoinTableItem = ({ item, deleteEmail }) => {
  const emailDate = new Date(item.date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
      >
        {item.email ? item.email : "no email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">
        {emailDate.toDateString()}
      </td>
      <td
        className="px-6 py-4 cursor-pointer text-center"
        onClick={() => deleteEmail(item._id)}
      >
       X
      </td>
    </tr>
  );
};

export default SubscriptoinTableItem;
