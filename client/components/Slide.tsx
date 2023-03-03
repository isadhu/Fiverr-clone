'use client'
import React, { ReactNode } from 'react'
import Slider from "infinite-react-carousel"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


type Props = {
  children?:
    | React.ReactNode
    | React.ReactChild[]
    | (IntrinsicAttributes & IntrinsicClassAttributes<Carousel>)
  slidesToShow: number
  arrowsScroll: number
}

export default function Slide({children, slidesToShow, arrowsScroll}: Props) {
  return (
    <div className="flex justify-center py-[100px] px-0">
      <div className="w-[1400px] ">
        <Slider

          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          autoplay={true}
        >
          {children}
        </Slider>
      </div>
    </div>
  )
}


        // {
        //   /* <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>{children}</Slider> */
        // }

        // <Carousel
        //   infiniteLoop={true}
        //   showArrows={true}
        //   showIndicators={true}
        //   dynamicHeight={false}
        // >
        //   {children}
        // </Carousel>