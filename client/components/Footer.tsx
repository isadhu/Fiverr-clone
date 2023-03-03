import React from "react"
import Image from "next/image"

function Footer() {
  return (
    <div className="flex justify-center text-[#666] mx-0 my-[50-px]">
      <div className="w-[1400px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#555]">Categories</h2>
            <span className="font-light">Graphics & Design</span>
            <span className="font-light">Digital Marketing</span>
            <span className="font-light">Writing & Translation</span>
            <span className="font-light">Video & Animation</span>
            <span className="font-light">Music & Audio</span>
            <span className="font-light">Programming & Tech</span>
            <span className="font-light">Data</span>
            <span className="font-light">Business</span>
            <span className="font-light">Lifestyle</span>
            <span className="font-light">Photography</span>
            <span className="font-light">Sitemap</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#555]">About</h2>
            <span className="font-light">Press & News</span>
            <span className="font-light">Partnerships</span>
            <span className="font-light">Privacy Policy</span>
            <span className="font-light">Terms of Service</span>
            <span className="font-light">Intellectual Property Claims</span>
            <span className="font-light">Investor Relations</span>
            <span className="font-light">Contact Sales</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#555]">Support</h2>
            <span className="font-light">Help & Support</span>
            <span className="font-light">Trust & Safety</span>
            <span className="font-light">Selling on Liverr</span>
            <span className="font-light">Buying on Liverr</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#555]">Community</h2>
            <span className="font-light">Customer Success Stories</span>
            <span className="font-light">Community hub</span>
            <span className="font-light">Forum</span>
            <span className="font-light">Events</span>
            <span className="font-light">Blog</span>
            <span className="font-light">Influencers</span>
            <span className="font-light">Affiliates</span>
            <span className="font-light">Podcast</span>
            <span className="font-light">Invite a Friend</span>
            <span className="font-light">Become a Seller</span>
            <span className="font-light">Community Standards</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#555]">
              More From Fiverr
            </h2>
            <span className="font-light">Liverr Business</span>
            <span className="font-light">Liverr Pro</span>
            <span className="font-light">Liverr Logo Maker</span>
            <span className="font-light">Liverr Guides</span>
            <span className="font-light">Get Inspired</span>
            <span className="font-light">Liverr Select</span>
            <span className="font-light">ClearVoice</span>
            <span className="font-light">Liverr Workspace</span>
            <span className="font-light">Learn</span>
            <span className="font-light">Working Not Working</span>
          </div>
        </div>
        <hr className="mx-0 my-[50px] h-0 border-[1px] border-solid border-[#ebe9e9]" />
        <div className="flex items-center justify-between">
          <div className="w-max flex items-center gap-5">
            <h2 className="text-xl font-extrabold text-[#555555]">Fiverr</h2>
            <span className="text-[13px] whitespace-nowrap">
              © Liverr International Ltd. 2023
            </span>
          </div>
          <div className="w-max flex items-center gap-[30px]">
            <div className="flex gap-5">
              <Image
                src="/img/twitter.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />

              <Image
                src="/img/facebook.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />

              <Image
                src="/img/linkedin.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />

              <Image
                src="/img/pinterest.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />

              <Image
                src="/img/instagram.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/img/language.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
              <span>English</span>
            </div>
            <div className="link">
              <Image
                src="/img/coin.png"
                alt=""
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer