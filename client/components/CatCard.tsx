import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    card: {
    id: number;
    title: string;
    desc: string;
    img: string;
}
}

export default function CatCard({card}: Props) {
  return (
    <Link href="/" >
      <div className="w-[252px] h-[344px] text-white rounded-[5px] relative cursor-pointer">
        {/* <Image
          src={card.img}
          alt=""
          className="w-full h-full object-cover"
          height={50}
          width={50}
        /> */}
        <img src={card.img} alt="" className="w-full h-full object-cover" />
        <span className="font-light absolute top-[15px] left-[15px]">
          {card.desc}
        </span>
        <span className="absolute top-[40px] left-[15px] text-[24px] font-medium">
          {card.title}
        </span>
      </div>
    </Link>
  )
}
