import Slide from '@/components/Slide'
import Image from 'next/image'
import React from 'react'

export default function GigScreen() {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] px-0 py-[30px] flex gap-[50px]">
        <div className="flex flex-[2] flex-col gap-5 w-[60%] ">
          <span className="font-normal uppercase text-[14px] text-[#555] ">
            Liverr {">"} Graphics & Design {">"}{" "}
          </span>
          <h1 className="text-3xl font-bold">
            I will create ai generated art for you
          </h1>
          <div className="flex items-center gap-[10px]">
            <img
              className="w-8 h-8 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-sm font-medium">Anna Bell</span>
            <div className="flex items-center gap-[5px]">
              <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
              <span className="text-sm font-bold text-[#ffc108]">5</span>
            </div>
          </div>
          <Slide slidesToShow={1} arrowsScroll={1} className="bg-[#F5F5F5] ">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
          </Slide>
          <h2 className="font-medium text-3xl">About This Gig</h2>
          <p className="font-light text-lg text-[#555]">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="mt-[50px] flex flex-col gap-[20px] ">
            <h2 className="text-2xl font-medium">About The Seller</h2>
            <div className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className=" w-[100px] h-[100px] rounded-[50%] object-cover"
              />
              <div className="flex flex-col gap-[10px] ">
                <span className="font-medium">Anna Bell</span>
                <div className="flex items-center gap-[5px]">
                  <img
                    src="/img/star.png"
                    alt=""
                    className="h-[14px] w-[14px]"
                  />
                  <img
                    src="/img/star.png"
                    alt=""
                    className="h-[14px] w-[14px]"
                  />
                  <img
                    src="/img/star.png"
                    alt=""
                    className="h-[14px] w-[14px]"
                  />
                  <img
                    src="/img/star.png"
                    alt=""
                    className="h-[14px] w-[14px]"
                  />
                  <img
                    src="/img/star.png"
                    alt=""
                    className="h-[14px] w-[14px]"
                  />
                  <span className="text-sm font-bold text-[#ffc108]">5</span>
                </div>
                <button className="bg-white rounded-[5px] p-[10px] border-[1px] border-solid border-gray-500 text-sm">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="border-[1px] border-solid border-gray-300 rounded-[5px] p-5 mt-5">
              <div className="flex justify-between flex-wrap">
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className="h-0 mb-5 border-[0.5px] border-solid border-gray-200" />
              <p className="font-light">
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="mt-[50px]">
            <h2 className="text-2xl">Reviews</h2>
            <div className="flex flex-col gap-5 my-5 mx-0">
              <div className="flex items-center gap-3">
                <img
                  className="h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span className="font-medium text-sm">Garner David</span>
                  <div className="flex items-center  gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span className="text-sm font-medium">United States</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[5px] items-center">
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <span className="text-[14px] font-bold text-[#ffc108]">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="w-[14px]" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="w-[14px]" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-0 my-[50px] mx-0 border-[0.5px] border-solid border-gray-200" />
            <div className="flex flex-col gap-5 my-5 mx-0">
              <div className="flex items-center gap-3">
                <img
                  className="h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span className="font-medium text-sm">Sidney Owen</span>
                  <div className="flex items-center  gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span className="text-sm font-medium">Germany</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[5px] items-center">
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="w-[14px]" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="w-[14px]" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-5 my-5 mx-0">
              <div className="flex items-center gap-3">
                <img
                  className="h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span className="font-medium text-sm">Lyle Giles </span>
                  <div className="flex items-center gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span className="text-sm font-medium">United States</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[5px] items-center">
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/img/star.png" alt="" className="h-[14px] w-[14px]" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="w-[14px]" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="w-[14px]" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1] border-[1px] border-solid border-gray-200 p-5 flex-col rounded-[5px] gap-5 h-max max-h-[500px] sticky top-[150px] ">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light">$ 59.99</h2>
          </div>
          <p className="text-gray-400 mx-0 my-[10px]">
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="flex items-center justify-between text-[14px]">
            <div className="flex items-center gap-[10px]">
              <img src="/img/clock.png" alt="" className="w-5" />
              <span>2 Days Delivery</span>
            </div>
            <div className="flex items-center justify-between text-[14px]">
              <img src="/img/recycle.png" alt="" className="w-5" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div
          //className="features"
          >
            <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/img/greencheck.png" alt="" className="w-[14px]" />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/img/greencheck.png" alt="" className="w-[14px]" />
              <span>Artwork delivery</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/img/greencheck.png" alt="" className="w-[14px]" />
              <span>Image upscaling</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/img/greencheck.png" alt="" className="w-[14px]" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-[#1dbf73] p-[10px] text-white font-medium border-none text-lg cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
