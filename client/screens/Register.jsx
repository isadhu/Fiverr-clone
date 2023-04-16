'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import upload from '@/utils/upload'
import newRequest from "@/utils/newRequest"

function Register() {
    const [file, setFile] = useState(null)
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: ""
    })

    const router = useRouter()

    //(e: React.FormEvent | any)
    const handleChange = (e) => {
        setUser(prev => {
        return { ...prev, [e.target.name]: e.target.value }
        })
    }
    
    const handleSeller = (e) => {
        setUser(prev => {
        return { ...prev, isSeller: e.target.checked }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = await upload(file)
        try {
        await newRequest.post("/auth/register", {
            ...user,
            img: url
        })
        router.push("/")
        } catch (err) {
        console.log(err)
        }
    }

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-[960px] px-0 py-[100px] flex gap-[120px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 flex-col gap-[10px] justify-between">
          <h1 className=" text-gray-500 mb-5 text-3xl font-bold">
            Create a new account
          </h1>
          <label htmlFor="" className=" text-gray-600 text-lg">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="" className=" text-gray-600 text-lg">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="" className=" text-gray-600 text-lg">
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
          />
          <label htmlFor="" className=" text-gray-600 text-lg">
            Profile Picture
          </label>
          <input
            type="file"
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            onChange={e => setFile(e.target.files[0])}
          />
          <label htmlFor="" className=" text-gray-600 text-lg">
            Country
          </label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            onChange={handleChange}
          />
          <button
            type="submit"
            className=" border-none p-5  text-white font-medium text-lg bg-[#1dbf73] cursor-pointer"
          >
            Register
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-[10px] justify-between">
          <h1 className="text-gray-500 mb-5 text-3xl font-bold">
            I want to become a seller
          </h1>
          <div className="flex items-center gap-5">
            <label htmlFor="" className=" text-gray-600 text-lg">
              Activate the seller account
            </label>
            {/* <label className=" relative inline-block w-[50px] h-[24px]">
              <input
                type="checkbox"
                //className="p-5 border-[1px] border-solid border-[rgb(216,214,214)] "
                className=" opacity-0 w-0 h-0 checked:bg-[#2196f3] focus:shadow-[0_0_1px_#2196f3]"
                //className="relative inline-block opacity-0 w-0 h-0"
                onChange={handleSeller}
              />
              <span
                className="absolute cursor-pointer top-0 left-0 right-0 bottom-0
                     bg-[#ccc] -webkit-transition-[0.4s] transition-[0.4s] rounded-3xl
                     before:absolute before:content-[''] before:h-[16px] before:w-[16pxf]
                     before:left-1 before:bottom-1 before:bg-white before:-webkit-transition-[0.4s]
                     before:transition-[0.4s] before:rounded-[50%] "
              ></span>
            </label> */}

            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={handleSeller}
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
          <label htmlFor="" className=" text-gray-600 text-lg">
            Phone Number
          </label>
          <input
            name="phone"
            type="text"
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="" className="text-gray-600 text-lg">
            Description
          </label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols={30}
            className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
            rows={10}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register