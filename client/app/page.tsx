import CatCard from "@/components/CatCard";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Slide from "@/components/Slide";
import TrustedBy from "@/components/TrustedBy";
import {cards, projects} from '@/data'
import Image from "next/image";

export default function Home() {
    return (
      <>
        <Main />
        <TrustedBy />
        <>
          <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map(card => (
              <CatCard key={card.id} card={card} />
            ))}
          </Slide>
        </>
        <>
          <div className="features">
            <div className="w-[1400px] flex items-center gap-[120px]">
              <div className="flex flex-col gap-[15px] font-sans w-[40%]">
                <h1 className="font-medium mb-[10px] text-4xl">
                  A whole world of freelance talent at your fingertips
                </h1>
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  The best for every budget
                </div>
                <p className=" text-gray-500 mb-5 text-lg font-light tracking-[1px]">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  Quality work done quickly
                </div>
                <p className=" text-gray-500 mb-5 text-lg font-light tracking-[1px]">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  Protected payments, every time
                </div>
                <p className=" text-gray-500 mb-5 text-lg font-light tracking-[1px]">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  24/7 support
                </div>
                <p className=" text-gray-500 mb-5 text-lg font-light tracking-[1px]">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>
              <div className="flex flex-col gap-[15px] font-sans">
                <video src="./img/video.mp4" controls className="w-[720px]" />
              </div>
            </div>
          </div>
        </>
        <>
          <div className="explore">
            <div className="w-[1400px]">
              <h1 className="text-[#555] text-4xl font-medium mb-[10px]">
                Explore the marketplace
              </h1>
              <div className="w-full flex justify-between flex-wrap">
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Graphics & Design</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>

                  <span className="font-light">Digital Marketing</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Writing & Translation</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Video & Animation</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Music & Audio</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Programming & Tech</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Business</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Lifestyle</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Data</span>
                </div>
                <div className="itemExplore">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="line"></div>
                  <span className="font-light">Photography</span>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="features dark">
            <div className="w-[1400px] flex items-center gap-[200px]">
              <div className="flex flex-col gap-[15px] w-[100%] font-sans">
                <h1 className=" text-white font-medium mb-[10px] text-4xl ">
                  liverr <i className="font-light">business</i>
                </h1>
                <h1 className=" text-white text-4xl font-medium mb-[10px] ">
                  A business solution designed for{" "}
                  <i className="font-light">teams</i>
                </h1>
                <p className=" text-gray-100 mb-5 text-lg font-light tracking-[1px]">
                  Upgrade to a curated experience packed with tools and
                  benefits, dedicated to businesses
                </p>
                <div className="text-white font-light text-sm flex gap-[10px]">
                  <img src="./img/check.png" alt="" className="w-6 h-6" />
                  Connect to freelancers with proven business experience
                </div>

                <div className="text-white font-light text-sm flex gap-[10px]">
                  <img src="./img/check.png" alt="" className="w-6 h-6" />
                  Get matched with the perfect talent by a customer success
                  manager
                </div>

                <div className="text-white font-light text-sm flex gap-[10px]">
                  <img src="./img/check.png" alt="" className="w-6 h-6" />
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </div>
                <button className="bg-[#1dbf73] border-none text-white px-5 py-[14px] rounded-[5px] w-max text-base cursor-pointer mt-5">
                  Explore Liverr Business
                </button>
              </div>
              <div className="flex flex-col gap-[15px] ">
                <img
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </>
        <>
          <Slide slidesToShow={4} arrowsScroll={4}>
            {projects.map(card => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Slide>
        </>
      </>
    )
}
