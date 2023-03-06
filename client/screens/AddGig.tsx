import React from 'react'

export default function AddGig() {
    return (
      <div className="flex justify-center mb-[100px]">
        <div className="w-[1400px] px-0 py-[5px]">
          <h1 className="w-max mb-[30px] text-gray-500 font-light text-3xl">
            Add New Gig
          </h1>
          <div className="flex justify-between gap-[100px]">
            <div className="flex flex-col flex-1 gap-[10px] justify-between">
              <label htmlFor="" className="text-gray-500 text-lg">
                Title
              </label>
              <input
                type="text"
                className="p-5 border-black border-[1px]"
                placeholder="e.g. I will do something I'm really good at"
              />
              <label htmlFor="" className="text-gray-500 text-lg">
                Category
              </label>
              <select
                name="cats"
                id="cats"
                className="p-5 border-[1px] border-black"
              >
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <label htmlFor="" className="text-gray-500 text-lg">
                Cover Image
              </label>
              <input type="file" className="p-5 border-[1px] border-black" />
              <label htmlFor="" className="text-gray-500 text-lg">
                Upload Images
              </label>
              <input
                type="file"
                multiple
                className="p-5 border-[1px] border-black"
              />
              <label htmlFor="" className="text-gray-500 text-lg">
                Description
              </label>
              <textarea
                name=""
                className="p-5 border-black border-[1px]"
                id=""
                placeholder="Brief descriptions to introduce your service to customers"
                cols={0}
                rows={16}
              ></textarea>
              <button className="border-none p-5 text-white font-medium text-lg bg-[#1dbf73] cursor-pointer">
                Create
              </button>
            </div>
            <div className="flex flex-col flex-1 gap-[10px] justify-between">
              <label htmlFor="" className="text-gray-500 text-lg">
                Service Title
              </label>
              <input
                className="p-5 border-black border-[1px]"
                type="text"
                placeholder="e.g. One-page web design"
              />
              <label htmlFor="" className="text-gray-500 text-lg">
                Short Description
              </label>
              <textarea
                name=""
                className="p-5 border-black border-[1px]"
                id=""
                placeholder="Short description of your service"
                cols={30}
                rows={10}
              ></textarea>
              <label htmlFor="" className="text-gray-500 text-lg border-none ">
                Delivery Time (e.g. 3 days)
              </label>
              <input type="number" className="p-5 border-[1px]" />
              <label htmlFor="" className="text-gray-500 text-lg">
                Revision Number
              </label>
              <input type="number" className="p-5 border-black border-[1px]" />
              <label htmlFor="" className="text-gray-500 text-lg">
                Add Features
              </label>
              <input
                className="p-5 border-[1px] border-black"
                type="text"
                placeholder="e.g. page design"
              />
              <input
                className="p-5 border-[1px] border-black"
                type="text"
                placeholder="e.g. file uploading"
              />
              <input
                className="p-5 border-[1px] border-black"
                type="text"
                placeholder="e.g. setting up a domain"
              />
              <input
                className="p-5 border-black border-[1px]"
                type="text"
                placeholder="e.g. hosting"
              />
              <label htmlFor="" className="text-gray-500 text-lg">
                Price
              </label>
              <input className="p-5  border-black border-[1px]" type="number" />
            </div>
          </div>
        </div>
      </div>
    )
}
