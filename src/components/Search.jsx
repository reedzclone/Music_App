import React, { useState } from 'react'
import Backgraphics from "../img/backgraphics.png";
import D1 from "../img/d1.png";
import D2 from "../img/d2.png";
import D3 from "../img/d3.png";
import D4 from "../img/d4.png";
import SearchIcon from "../img/search.png";
import Path318 from "../img/Path 318.png"
import MusicPlayer from './MusicPlayer';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { motion } from "framer-motion";
 
const Search = () => {
    
    const [elementIsVisible, setElementIsVisible] = useState(false);

    const bg = {
       true : {
        left: "-44rem"
       },
       false: {
        left: "-50rem"
       },
    };

    const redimg = {
        true : {
            left: "18rem"
        },
        false: {
            left: "16rem"
        }
    };

    const musicImg = {
        true: {
            left: "2rem",
        },
        false: {
            left: "6rem"
        },
    
    }
    

    return (
       
        <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">

            {/* left side */}
            <div className="left flex-1 ">
                <motion.img 
                    variants={bg}
                    animate={`${elementIsVisible}`}
                    transform={{duration: 1, type: "ease-out"}}
                    src={Backgraphics} alt="" className="absolute top-[22rem] left-[-47rem]" />
                <motion.img
                    src={D1} alt="" className="absolute w-[16rem] top-[26rem]" />{" "}
                <motion.img 
                    src={D2} alt="" className="absolute w-[9rem] top-[32.7rem] left-[7rem]" />{" "}
                <motion.img 
                    variants={redimg}
                    animate={`${elementIsVisible}`}
                    tansform={{duration:1, type: "ease-out"}}
                    src={D3} alt="" className="w-[9rem] top-[33rem] left-[17rem] absolute" />
                <motion.img 
                    variants={musicImg}
                    animate={`${elementIsVisible}`}
                    transfrom={{duration: 1, type: "ease-out"}}
                    src={D4} alt="" className="absolute w-[17rem] top-[50rem] left-[2rem] " />

            </div>
            {/* right side */}
            <div className="right flex flex-col items-start justify-start flex-1 h-[100%] pt-[9rem]">

                {/* Search Bar */}
                <div className="searchbar flex justify-start w-[100%]">
                    <input type="text" placeholder="search" className="flex-[19] outline-none p-3 h-[3rem] rounded-xl bg-[#020917]" />
                    {/* Search Icon */}
                    <div className="searchicon flex flex-1 items-center rounded-xl ml-4 
                    bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                        <img src={SearchIcon} alt="" className="w-[1.5rem]" />
                    </div>
                </div>

                    {/* Tild Icon */}
                <div className="tild">
                    <img src={Path318} alt="" className="w-[5rem] mt-[2rem]"/>
                </div>

                <div className="searchmusic flex flex-col mt-5 text-4xl">
                    <span>Search Music by</span>
                    <span><b>Name of Direct URL</b></span>
                    <span className="text-sm mt-3 text-[#4D586A]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> 
                    Quas iste nihil blanditiis tenetur recusandae neque?<br /> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga!</span>
                </div>
                <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
                {/* Music Player */}
                    <MusicPlayer />
                    </ReactVisibilitySensor>
            </div>
        </div>
        
    )
}

export default Search