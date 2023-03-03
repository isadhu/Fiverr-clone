import Image from 'next/image'
import React from 'react'

export default function Main() {
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="w-[1400px] flex items-center ">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[50px] ">
            Find the perfect{" "}
            <span className="italic font-light">freelance</span> services for
            your business
          </h1>
          <div className="bg-white rounded-[5px] flex items-center justify-between overflow-hidden  ">
            <div className="flex items-center gap-[10px]">
              <Image
                src="/img/search.png"
                className="w-[20px] h-[20px] m-[10px]"
                width={30}
                height={30}
                alt=""
              />
              <input
                type="text"
                className="border-none outline-none "
                placeholder='Try "building mobile app"'
              />
            </div>
            <button className="w-[120px] h-[50px] border-none bg-[#1dbf73] text-white self-end cursor-pointer">
              Search
            </button>
          </div>
          <div className="flex items-center gap-[10px] ">
            <span className="w-max">Popular:</span>
            <button className="w-max text-white border-[1px] border-solid border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">
              Web Design
            </button>
            <button className="w-max text-white border-[1px] border-solid border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">
              WordPress
            </button>

            <button className="w-max text-white border-[1px] border-solid border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">
              Logo Design
            </button>
            <button className="w-max text-white border-[1px] border-solid border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">
              AI Services
            </button>
          </div>
        </div>
        <div className="h-full">
          <Image
            src="/img/man.png"
            alt=""
            className="h-full object-contain ml-5 "
            height={1}
            width={1000}
          />
        </div>
      </div>
    </div>
  )
}
