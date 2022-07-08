import React from 'react'
import DownloadAds from './DownloadAds'

const Hero = () => {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] 
    rounded-b-[5rem] w-[100%] 
    h-[35rem] relative z-[3]">
        {/* left-side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
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
        <div className="images">
            Images
        </div>
    </div>
  )
}

export default Hero