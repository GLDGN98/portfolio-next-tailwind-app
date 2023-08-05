import React from "react"
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr"

const SocialLinks = () => {
  return (
    <ul className="flex align-center gap-10 py-10">
      <li className="border-2 rounded-full border-clr2 p-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer">
        <GrFacebookOption />
      </li>
      <li className="border-2 rounded-full border-clr2 p-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer">
        <GrInstagram />
      </li>
      <li className="border-2 rounded-full border-clr2 p-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer">
        <GrLinkedinOption />
      </li>
      <li className="border-2 rounded-full border-clr2 p-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer">
        <GrTwitter />
      </li>
    </ul>
  )
}

export default SocialLinks
