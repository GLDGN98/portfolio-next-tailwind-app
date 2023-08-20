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

  useEffect(() => {
    if (servicesInView) {
      headerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })

      cardControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      })
    }
  }, [headerControls, cardControls, servicesInView])

  const serviceData = [
    {
      icon: PiCodeLight,
      title: "Web Development",
      description: `
         Craft impactful web applications from concept to reality.
         Comprehensive services covering frontend design and responsiveness.
         Create user-friendly websites that excel in performance and aesthetics.
      `,
    },
    {
      icon: PiCellSignalFullLight,
      title: "Frontend Optimization",
      description: `
        Enhance websites with comprehensive Frontend Optimization.
        Optimize HTML, CSS, and JavaScript for improved performance.
        Streamline assets and deliverables for faster load times and responsiveness.
      `,
    },
    {
      icon: PiPaintBrushLight,
      title: "Design Implementation",
      description: `
        Translate design concepts into captivating web interfaces.
        Expertise in turning static designs into dynamic web experiences.
        Craft HTML and CSS that preserves design details for impactful user experiences.
      `,
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
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <motion.li
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={cardControls}
              className="flex items-center"
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
