import React from "react"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })


const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className=" bg-slate-700 rounded-xl hover:border-2 border-clr1 p-10 text-center flex flex-col items-center gap-5">
      <i className="text-6xl text-clr1">
        <Icon />
      </i>
      <h2 className="text-3xl font-bold text-clr3">{title}</h2>
      <p className={`${inter.className}`}>{description}</p>
      <button className={`border-2 ${inter.className} font-medium rounded-lg hover:font-semibold border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer tracking-wide`}>
        Read More
      </button>
    </div>
  )
}

export default ServiceCard
