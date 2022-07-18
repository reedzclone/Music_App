import React from 'react'
import Features from './Features'

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[5rem]
     bg-[#020917] h-[60rem] pt-[2rem]
      mt-[-10rem] relative z-[2] rounded-b-[5rem]">

      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        {/* heading */}
        <span>An Amazing App Experience That Will Make Your Day</span>
        <span><b>Music Experience</b></span>
      </div>

      {/* features */}
      <div className="feature flex item-center justify-around mt-[6rem] w-[100%]" >
      <Features icon="Group 2" title="For Live Music" />
      <Features icon="music icon" title="For Daily Music" />
      <Features icon="Group 4" title="For Artist" />
      </div>
      

    </div>
  )
}

export default Experience