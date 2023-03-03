import React from 'react'


type Props = {
    card: {
    id: number;
    img: string;
    pp: string;
    cat: string;
    username: string;
    }
}

export default function ProjectCard({card}: Props) {
  return (
    <div className="w-[300px] h-[300px] rounded-[5px] overflow-hidden cursor-pointer border-[1px] border-solid border-[rgb(225,225,225)]">
      <img src={card.img} alt="" className="w-full h-[70%] object-cover" />
      <div className="flex items-center gap-5 p-[15px]">
        <img
          src={card.pp}
          alt=""
          className="w-[40px] h-[40px] rounded-[50%] object-cover"
        />
        <div className=" ">
          <h2 className="text-[14px] font-medium">{card.cat}</h2>
          <span className="text-[14px] font-light">{card.username}</span>
        </div>
      </div>
    </div>
  )
}
