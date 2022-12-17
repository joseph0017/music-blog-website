import React from "react";
import {motion} from "framer-motion/dist/framer-motion"
import evergreen from '../components/images/evergreen.jpg'

const heroVariant = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,

  transition: {
    type: 'tween',
      delay: 1,
      duration: 1.4
  }
}
}

const Hero = () => {
  return (
    <>
  <motion.section className="mb-40" variants = {heroVariant}
  initial = "hidden"
  animate = "visible"
  >

<div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
  <div className="container mx-auto xl:px-32">
    <div className="grid lg:grid-cols-2 gap-12 flex items-center">
      <div className="mt-12 lg:mt-0">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Check out our Gallery and <br />
        <span className="text-green-300">Music Page</span></h1>
      </div>
      <div className="mb-12 lg:mb-0">
        <img
          src= {evergreen}
          className="w-full rounded-lg shadow-lg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</motion.section>
    </>
  );
};

export default Hero;

