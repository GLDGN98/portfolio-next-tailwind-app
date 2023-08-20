import React from "react"
import { RotateLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <RotateLoader color="#BCAB79" />
    </div>
  );
}

export default Loader
