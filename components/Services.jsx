"use client"
import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  PiPaintBrushLight,
  PiCodeLight,
  PiCellSignalFullLight,
} from "react-icons/pi"
import ServiceCard from "@/components/ServiceCard"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const headerControls = useAnimation()
  const cardControls = useAnimation()
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true })

  // Use useEffect to trigger animations after loading and when the services section comes into view
  useEffect(() => {
    if (servicesInView) {
      // Trigger animation for the header when the services section is in view
      headerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })

      // Trigger animation for the cards when the services section is in view
      cardControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5, // Add a slight delay to make the cards animation start after the header animation
        },
      })
    }
  }, [headerControls, cardControls, servicesInView])

  const serviceData = [
    {
      icon: PiCodeLight,
      title: "Web Development",
      description:
        "From the initial idea to a fully functional web application, I'm here to bring your vision to life. With a passion for crafting impactful online experiences, I offer comprehensive web development services that cover frontend design, responsive layouts, and interactive elements. Whether you need a complete web solution or specific frontend features, I can create a robust, user-friendly website that not only looks great but also performs seamlessly. Let's collaborate to build a web application that stands out in today's digital landscape.",
    },
    {
      icon: PiCellSignalFullLight,
      title: "Frontend Optimization",
      description:
        "Unleash the true potential of your website with my comprehensive Frontend Optimization services. I'm dedicated to enhancing every facet of your frontend, from meticulously optimizing HTML, CSS, and JavaScript code to refining asset delivery, resulting in significantly reduced load times and superior responsiveness across various devices. By streamlining images, fonts, and other assets, I'll not only boost performance but also create a more efficient and enjoyable user experience. Let's work together to optimize your frontend, transforming it into a powerful tool that leaves a lasting impression.",
    },
    {
      icon: PiPaintBrushLight,
      title: "Design Implementation",
      description:
        "Ready to transform your design dreams into a captivating web reality? With an expert eye for design and mastery of frontend technologies, I specialize in converting your static concepts into vibrant web interfaces. My precision-crafted HTML and CSS code preserves every detail, resulting in a user experience that mirrors your original vision. Let's collaborate to create a dynamic digital presence that stands out and leaves a lasting impact on your users.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center text-clr2 mt-36 md:mt-0">
      <motion.div
        className="text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={headerControls}
      >
        <h1 className="text-5xl md:text-7xl">
          My <span className="text-clr3">Services</span>
        </h1>
      </motion.div>
      <div className="my-20" ref={servicesRef}>
        <ul className="flex flex-col lg:flex-row gap-10">
          {serviceData.map((service, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ y: 100, opacity: 0 }}
              animate={cardControls}
              className="flex flex-col items-center gap-5"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
