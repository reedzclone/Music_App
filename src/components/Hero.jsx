import React, { useState } from 'react'
import DownloadAds from './DownloadAds';
import Backgraphics from "../img/backgraphics.png"
import P1 from "../img/p 1.png"
import P2 from "../img/p 2.png"
import P3 from "../img/p 3.png"
import P4 from "../img/p 4.png"
import ReactVisibilitySensor from 'react-visibility-sensor';
import { motion } from "framer-motion"


const Hero = () => {

  const [elementIsVisible, setElementIsVisible] = useState(false);
  
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem"
    }
  }
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px"
    }
  }

  const rect = {
    true: {
      left: "8rem",
    },
    false: {
      left: "13rem",
  }
  }

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem"
    } 
  }

  return (
    <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)} minTopValue={300}>

      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] 
    rounded-b-[5rem] w-[100%] 
    h-[35rem] relative z-[3]">
        {/* left-side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[4rem]">
          <span>Experience The </span>
          <span><b>Best Quality Music</b></span>
          <span className="text-[15px] text-[#525D6E]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloribus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          {/* Download ads */}
          <div>
            <span className="text-[16px]">Download now on IOS and Andrioid</span>
            <DownloadAds />
          </div>
        </div>
        {/* right-side */}
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={Backgraphics} alt="" className="absolute top-[-8rem] left-[19rem]" />
          <img
            className="absolute h-[34rem] left-[13rem] top-[-15rem]" src={P1} alt="" />

          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={P2} alt="" className="absolute left-[235px] top-[94px] w-[175px]" />

          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={P3} alt="" className="absolute w-[5rem] left-[13rem] top-[12rem]" />

          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={P4} alt="" className="absolute w-[5rem] left-[12.5rem] top-[12rem]" />
        </div>
      </div>
    </ReactVisibilitySensor>
  )
}

export default Hero