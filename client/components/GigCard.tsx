import Image from 'next/image'
import Link from 'next/link'
import { it } from 'node:test'
import React from 'react'

type Props = {
  item: {
    id: number
    img: string
    pp: string
    desc: string
    price: number
    star: number
    username: string
  }
}

export default function GigCard({item}: Props) {
  return (
    <Link href="/">
      <div className="w-[324px] h-[430px] border-[1px] border-solid border-[rgb(228,228,228)] mb-[40px]">
        {/* <Image
          src={item.img}
          alt=""
          className="w-full h-1/2 object-cover"
          height={10}
          width={10}
        /> */}
        <img src={item.img} alt="" className="w-full h-1/2 object-cover" />
        <div className="px-5 py-[10px] flex flex-col gap-5">
          <div className="flex items-center gap-[10px]">
            {/* <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%]"
              src={item.pp}
              alt=""
              height={10}
              width={10}
            /> */}
            <img
              src={item.pp}
              alt=""
              className="w-[26px] h-[26px] object-cover rounded-[50%]"
            />
            <span>{item.username}</span>
          </div>
          <p className="text-[#111]">{item.desc}</p>
          <div className="flex items-center gap-[5px]">
            <Image
              className="w-[14px] h-[14px] "
              src="/img/star.png"
              alt=""
              height={20}
              width={20}
            />
            <span className="text-xs font-bold text-[#ffc108]">
              {item.star}
            </span>
          </div>
        </div>
        <hr className="h-0 border-[0.5px] border-solid border-[rgb(228,228,228)]" />
        <div className="py-[10px] px-[20px] flex items-center justify-between">
          <Image
            className="w-[16px] h-[16px] cursor-pointer object-cover "
            src="/img/heart.png"
            alt=""
            height={20}
            width={20}
          />
          <div >
            <span className="text-[#999] text-xs">STARTING AT</span>
            <h2 className="text-[#555] text-lg font-normal text-end">
              $ {item.price}
              <sup className="text-xs font-light">99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}


// className = "items-center"