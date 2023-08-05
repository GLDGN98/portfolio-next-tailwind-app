import React from "react"
import { motion } from "framer-motion"
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr"

const SocialLink = ({ children }) => {
  return (
    <motion.li
      className="border-2 rounded-full border-clr2 p-3 text-clr3 cursor-pointer hover:bg-clr3 hover:text-clr2 hover:border-clr3"
      whileHover={{ scale: 1.1, rotate: 360 }}
    >
      {children}
    </motion.li>
  )
}

const SocialLinks = () => {
  return (
    <ul className="flex align-center gap-10 py-10">
      <SocialLink>
        <GrFacebookOption />
      </SocialLink>
      <SocialLink>
        <GrInstagram />
      </SocialLink>
      <SocialLink>
        <GrLinkedinOption />
      </SocialLink>
      <SocialLink>
        <GrTwitter />
      </SocialLink>
    </ul>
  )
}

export default SocialLinks
