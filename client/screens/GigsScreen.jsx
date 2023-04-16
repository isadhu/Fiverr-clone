'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useQuery } from "@tanstack/react-query"
import { gigs } from '@/data';
import GigCard from '@/components/GigCard';
import Image from 'next/image';
import newRequest from '@/utils/newRequest';
import { useSearchParams, usePathname } from "next/navigation"
import { useLocation } from "react-router-dom"

export default function GigsScreen() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    //const { search } = useLocation()
    //const pathname = usePathname()
    //const searchParams = useSearchParams()
    //const search = searchParams.get("search")
    //const search = searchParams.get("search")
    //const cat = searchParams.get("cat")
    // console.log(searchParams)

    //console.log(pathname)

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'

    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ["gigs"],
      queryFn: () =>
        newRequest
          .get(
            //`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
            "/gigs"
            //`/gigs${search}`
          )
          .then(res => {
            return res.data
          })
    })

     console.log(data)

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
      refetch()
    }, [sort])

    const apply = () => {
      refetch()
    }


  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] px-0 py-[30px] flex flex-col gap-[15px]">
        <span className="font-light uppercase text-[13px] text-[#555]">
          Liverr {">"} Graphics & Design {">"}{" "}
        </span>
        <h1 className="font-bold text-3xl">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-[10px] text-[#555] font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              className="p-[5px] rounded-[5px] outline-none border-[1px] text-[#999] border-solid border-gray-200"
              placeholder="min"
            />
            <input
              ref={maxRef}
              className="p-[5px] rounded-[5px] outline-none border-[1px] text-[#999] border-solid border-gray-200"
              type="number"
              placeholder="max"
            />
            <button
              onClick={apply}
              className="px-[10px] py-[5px] bg-[#1dbf73] text-white border-none font-medium rounded-[5px] cursor-pointer"
            >
              Apply
            </button>
          </div>
          <div className=" relative flex items-center gap-[10px]">
            <span className="text-#555 font-light">Sort by</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <Image
              src="/img/down.png"
              alt=""
              className="w-[15px] cursor-pointer"
              height={15}
              width={15}
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="p-5 bg-white border-[0.5px] border-solid border-gray-200 rounded-[5px] absolute top-8 right-0 z-[9] flex flex-col gap-5 text-[#555]">
                {sort === "sales" ? (
                  <span
                    className="cursor-pointer"
                    onClick={() => reSort("createdAt")}
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    className="cursor-pointer"
                    onClick={() => reSort("sales")}
                  >
                    Best Selling
                  </span>
                )}
                <span
                  className="cursor-pointer"
                  onClick={() => reSort("sales")}
                >
                  Popular
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          {/* {gigs.map(gig => (
            <GigCard key={gig.id} item={gig} />
          ))} */}
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map(gig => <GigCard key={gig._id} item={gig} />)
            }
        </div>
      </div>
    </div>
  )

}
