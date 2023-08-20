import React from "react"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const ServiceCard = ({ icon: Icon, title, description }) => {
  const bulletPoints = description
    .split("\n")
    .filter((point) => point.trim() !== "")

  return (
    <div className="bg-slate-700 rounded-xl flex flex-col border-clr1 p-10">
      <i className="text-6xl text-clr1 self-center">
        <Icon />
      </i>
      <h2 className="text-3xl font-bold text-clr3 text-center p-5">{title}</h2>
      <ul className={`${inter.className}`}>
        {bulletPoints.map((point, index) => (
          <div key={index}>
            <li className="relative">
              <div className="w-2 h-2 bg-clr3 rounded-full absolute -left-5 top-2"></div>
              {point}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard
