import Image from 'next/image'
import React from 'react'

export default function TrustedBy() {
  return (
    <div className="flex justify-center bg-[#fafafa] h-[100px]">
      <div className="max-w-[760px] flex items-center gap-[20px] text-[rgb(200,200,200)] font-medium">
        <span>Trusted by:</span>
        <Image
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt=""
          className="h-[50px] object-contain"
          height={50}
          width={50}
        />
        <Image
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
          className="h-[50px] object-contain"
          height={50}
          width={50}
        />
        <Image
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
          className="h-[50px] object-contain"
          height={50}
          width={50}
        />
        <Image
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
          className="h-[50px] object-contain"
          height={50}
          width={50}
        />
        <Image
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
          className="h-[50px] object-contain"
          height={50}
          width={50}
        />
      </div>
    </div>
  )
}
