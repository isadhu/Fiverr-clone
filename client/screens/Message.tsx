import Link from 'next/link'
import React from 'react'

export default function Message() {
    return (
      <div className="flex justify-center">
        <div className="w-[1200px] m-[50px]">
          <span className="font-light text-[13px] text-[#555]">
            <Link href="/messages">Messages</Link> {">"} John Doe {">"}
          </span>
          <div className="mx-0 my-[30px] p-[50px] flex flex-col gap-5 h-[500px] overflow-scroll">
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem owner">
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] bg-blue-700 text-white rounded-[20px 0px 20px 20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
            <div className="messageItem">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <p className="max-w-[500px] p-5 bg-[rgb(244,241,241)] rounded-[0px 20px 20px 20px] text-gray-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iure mollitia perspiciatis officiis voluptate? Sequi quae
                officia possimus, iusto labore alias mollitia eveniet nemo
                placeat laboriosam nisi animi! Error, tenetur!
              </p>
            </div>
          </div>
          <hr  className='h-0 border-[0.5px] border-solid border-[rgb(232, 230, 230)]'/>
          <div className="flex items-center justify-between mt-5">
            <textarea
              //type="text"
              placeholder="write a message"
              className='w-[80%] h-[100px] p-[10px] border-[1px] border-solid border-gray-200 rounded-[10px]'
            />
            <button className='bg-[#1dbf73] p-5 text-white font-medium border-none rounded-[10px] cursor-pointer w-[100px]'>Send</button>
          </div>
        </div>
      </div>
    )
}
