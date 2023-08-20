import React from "react"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const ServiceCard = ({ icon: Icon, title, description }) => {
  const bulletPoints = description
    .split("\n")
    .filter((point) => point.trim() !== "")

  return (
    <div className="flex-grow bg-slate-700 rounded-xl border-clr1 p-10 text-left flex flex-col items-center justify-between gap-5">
      <i className="text-6xl text-clr1">
        <Icon />
      </i>
      <h2 className="text-3xl font-bold text-center text-clr3">{title}</h2>
      <div className={`${inter.className} flex flex-col baseline xl:items-center`}>
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <li className="relative">
              <div className="w-2 h-2 bg-clr3 rounded-full absolute -left-5 top-2"></div>
              {point}
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
