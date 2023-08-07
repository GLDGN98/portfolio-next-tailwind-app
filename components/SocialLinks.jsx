import React from "react"
import { motion } from "framer-motion"
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr"

const SocialLink = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      className="border-2 rounded-full border-clr2 p-3 text-clr3 cursor-pointer hover:bg-clr3 hover:text-clr2 hover:border-clr3"
      whileHover={{ scale: 1.1, rotate: 360 }}
    >
      {children}
    </motion.a>
  )
}

const SocialLinks = () => {
  return (
    <ul className="flex align-center justify-center md:justify-normal gap-10 py-10">
      <SocialLink href="https://www.facebook.com/gilad.dagan.9/">
        <GrFacebookOption />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/giladagan1/">
        <GrInstagram />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/gilad-dagan-21a856264/">
        <GrLinkedinOption />
      </SocialLink>
      <SocialLink>
        <GrTwitter />
      </SocialLink>
    </ul>
  )
}

export default SocialLinks
