'use client'
import React, { useState } from "react"
import newRequest from '@/utils/newRequest'
import Link from "next/link"
import { useRouter } from "next/navigation"


function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const router = useRouter()
  // (e: React.FormEvent | any)
  // : any
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await newRequest.post("/auth/login", { username, password })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      router.push("/")
    } catch (err) {
      setError(err.response)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[560-px] px-0 py-[100px] flex flex-col gap-5"
      >
        <h1 className="text-gray-500 mb-5 text-2xl font-medium">Sign In</h1>
        <label htmlFor="" className="text-gray-500 text-lg ">
          Username
        </label>
        <input
          name="username"
          type="text"
          placeholder="john"
          className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="" className="text-gray-500 text-lg ">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="p-5 border-[1px] border-solid border-[rgb(216,214,214)]"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="border-none p-5 text-white font-medium text-lg bg-[#1dbf73] cursor-pointer"
        >
          Login
        </button>
        {error && error}
      </form>
    </div>
  )
}

export default Login

// <Link href="/" onSubmit={handleSubmit}> </Link>