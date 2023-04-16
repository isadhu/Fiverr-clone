'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import newRequest from '@/utils/newRequest'


export default function Navbar() {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const router = useRouter()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])


  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  async function handleLogout() {
    try {
        await newRequest.post("/auth/logout")
        //localStorage.removeItem("currenUser")
        //localStorage.setItem("currentUser", null)
        localStorage.clear()
    } catch (error) {
        console.log(err)
    }
  }

  return (
    <div className={active || pathname !== "/" ? "navbarActive" : "navbar"}>
      <div className="flex justify-between w-[1400px] py-[20px] px-0">
        <div className="text-[34px] font-bold">
          <Link href="/">Fiverr</Link>
          <span className="text-[#1dbf73]">.</span>
        </div>
        <div className="flex items-center gap-6 font-medium font-serif">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div
              className="flex items-center gap-6 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <Image
                src={
                  currentUser.img ||
                  "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt=""
                className=" object-cover rounded-full h-8 w-8 "
                height={30}
                width={30}
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link href="/myGigs">Gigs</Link>
                      <Link href="/AddGigs"> Add New Gig</Link>
                    </>
                  )}
                  <Link href="/Orders">Orders</Link>
                  <Link href="/Messages">Messages</Link>
                  <Link href="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/Login">Sign In</Link>
              <Link href="/Register">
                <button
                  className="px-5 py-[8px] rounded border border-white border-solid
                            cursor-pointer bg-transparent hover:bg-[#1dbf73]
                            hover:border-[#1dbf73]"
                >
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className="w-full h-0 border-[0.5px] border-solid border-[rgb(228,227,227)]" />
          <div
            className="flex justify-between w-[1400px] px-0 py-[10px]
                     font-light text-gray-200 font-serif"
          >
            <Link href="/" className="menu">
              Graphics & Design
            </Link>
            <Link href="/" className="menu">
              Video & Animation
            </Link>
            <Link href="/" className="menu">
              Writing & Translation
            </Link>
            <Link href="/" className="menu">
              AI Services
            </Link>
            <Link href="/" className="menu">
              Digital Marketing
            </Link>
            <Link href="/" className="menu">
              Music & Audio
            </Link>
            <Link href="/" className="menu">
              Programming & Tech
            </Link>
            <Link href="/" className="menu">
              Business
            </Link>
            <Link href="/" className="menu">
              Lifestyle
            </Link>
          </div>
          <hr className="w-full h-0 border-[0.5px] border-solid border-[rgb(228,227,227)]" />
        </>
      )}
    </div>
  )
}
