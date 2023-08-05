"use client"
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import {
  PiPaintBrushLight,
  PiCodeLight,
  PiCellSignalFullLight,
} from "react-icons/pi";

const inter = Inter({ subsets: ["latin"] });

const Services = () => {
  const headerControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    // Trigger animation for the header when the component mounts
    headerControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });

    // Trigger animation for the cards when the component mounts
    cardControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }, [headerControls, cardControls]);

  return (
    <div className="flex flex-col items-center justify-center text-clr2 mt-40  w-5/6 m-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={headerControls}
      >
        <h1 className="text-7xl">
          My <span className="text-clr3">Services</span>
        </h1>
      </motion.div>
      <div className="my-20">
        <ul className="flex gap-10">
          <motion.li
            whileHover={{ scale: 1.02 }}
            initial={{ y: 100, opacity: 0 }}
            animate={cardControls}
            className="bg-gray-700 rounded-xl hover:border-2 border-clr1 p-10 text-center flex flex-col items-center gap-5"
          >
            <i className="text-6xl text-clr1">
              <PiCodeLight />
            </i>
            <h2 className="text-3xl font-bold text-clr3">Web Development</h2>
            <p className={`${inter.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.2 }}
              className={`border-2 font-medium rounded-lg hover:font-semibold  border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
            >
              Read More
            </motion.button>{" "}
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.02 }}
            initial={{ y: 100, opacity: 0 }}
            animate={cardControls}
            className="bg-gray-700 rounded-xl hover:border-2 border-clr1 p-10 text-center flex flex-col items-center gap-5"
          >
            <i className="text-6xl text-clr1">
              <PiPaintBrushLight />
            </i>
            <h2 className="text-3xl font-bold text-clr3">Graphic Design</h2>
            <p className={`${inter.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.2 }}
              className={`border-2 font-medium rounded-lg hover:font-semibold  border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
            >
              Read More
            </motion.button>{" "}
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.02 }}
            initial={{ y: 100, opacity: 0 }}
            animate={cardControls}
            className="bg-gray-700 rounded-xl hover:border-2 border-clr1 p-10 text-center flex flex-col items-center gap-5"
          >
            <i className="text-6xl text-clr1">
              <PiCellSignalFullLight />
            </i>
            <h2 className="text-3xl font-bold text-clr3">Digital Marketing</h2>
            <p className={`${inter.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.2 }}
              className={`border-2 font-medium rounded-lg hover:font-semibold  border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
            >
              Read More
            </motion.button>{" "}
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
