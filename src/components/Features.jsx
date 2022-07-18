import React, { useState } from 'react'
import { motion } from "framer-motion";
import ReactVisibilitySensor from 'react-visibility-sensor';

const Features = ({ icon, title }) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const variant = {
    true: {
      transform: "scale(1)"
    },
    false: {
      transform: "scale(0.5)"
    }
  }

  return (
    <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className="features flex items-center justify-center flex-col relative text-center mx-[12px]">

        {/* icon */}
        <motion.div 
          variants={variant}
          animate={`${elementIsVisible}`}
          transform={{duration: 1, type: "ease-out"}}
          className="icon bg-[#081730] rounded-2xl p-4">

          <img src={require(`../img/${icon}.png`)} alt="" className="w-[3rem]" />

          </motion.div>
          <span className="mt-5">{title}</span>

          <span className="text-[#707070] mt-[4rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Suscipit expedita quisquam quia quis explicabo voluptatem.
          </span>

          <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">Learn More</span>
        
      </div>  
    </ReactVisibilitySensor >




  )
}

export default Features