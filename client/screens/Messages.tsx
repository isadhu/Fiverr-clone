import Link from 'next/link'
import React from 'react'

export default function Messages() {
    const currentUser = {
      id: 1,
      username: "Anna",
      isSeller: true
    }

    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`

    return (
      <div className="flex justify-center">
        <div className="w-[1400px] px-0 py-[50px]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Messages</h1>
          </div>
          <table className="w-full first:font-medium [&>*:nth-child(2)]:text-gray-900  [&>*:nth-child(3)]:text-gray-900">
            <tr className="h-[100px] ">
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
            <tr className="active h-[100px] ">
              <td className="p-[10px]">Charley Sharp</td>
              <td className="p-[10px]">
                <Link
                  href="/message/123"
                  className="flex items-center gap-[10px]"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px]">1 hour ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white p-[10px] border-none cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>
            <tr className="active h-[100px] ">
              <td className="p-[10px]">John Doe</td>

              <td className="p-[10px]">
                <Link
                  href="/message/123"
                  className="flex items-center gap-[10px]"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px]">2 hours ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white p-[10px] border-none cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>
            <tr className="h-[100px]">
              <td className="p-[10px]">Elinor Good</td>
              <td className="p-[10px]">
                <Link
                  href="/message/123"
                  className="flex items-center gap-[10px]"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px]">1 day ago</td>
            </tr>
            <tr className="h-[100px]  ">
              <td className="p-[10px]">Garner David </td>
              <td className="p-[10px]">
                <Link
                  href="/message/123"
                  className="flex items-center gap-[10px]"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px]">2 days ago</td>
            </tr>
            <tr className="h-[100px] ">
              <td className="p-[10px]">Troy Oliver</td>
              <td className="p-[10px]">{message.substring(0, 100)}</td>
              <td className="p-[10px]">1 week ago</td>
            </tr>
          </table>
        </div>
      </div>
    )
}
