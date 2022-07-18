import React from 'react'
import Path318 from "../img/Path 318.png"
import DownloadAds from './DownloadAds'

const Download = () => {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] 
    pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
        {/* tild icon or path icon */}
        <img src={Path318} alt="" className="w-[5rem]"/>
        {/* Heading */}
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>Download The Best Music</span>
            <span>
                <b>App Now!</b>
            </span>
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium alias 
                voluptas ratione maiores dignissimos? 
                Provident culpa nam aperiam rerum officia.
            </span>
        </div>
        <div className="mt-14">
            <DownloadAds /> 
        </div>
    </div>
  )
}

export default Download