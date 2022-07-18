import React from 'react'
import MaskGroup23 from "../img/Mask Group 23.png";
import Path from "../img/path.png";
import Group9 from "../img/Group 9.png";
import Group8 from "../img/Group 8.svg";

const MusicPlayer = () => {
    return (
        <div className="musicplayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5">
            {/* Upper Part */}
            <div className="upperpart flex items-center justify-between">
                {/* Profile  */}
                <div className="profile flex">
                    <img src={MaskGroup23} alt="" className="w-[2.5rem] h-[2.5rem] border-2 
                    border-white rounded-full 
                    hover:pointer-cursor" />
                    <div className="details flex flex-col ml-4">
                        <span className="text-[1rem]">Tristam Bone Dry</span>
                        <span className="text-sm text-gray-500">Unknown Artist</span>
                    </div>
                </div>
                <div className="menuicon">
                    <img src={Path} alt="" className="h-[1rem]" />
                </div>
            </div>

            {/* Lower Part */}
            <div className="lowerpart flex items-center justify-between mt-5">
                <div className="track flex justify-between text-sm text-gray-500 flex-[2]">
                    <span>2:30</span>
                    <img src={Group9} alt="" className="w-[16rem]" />
                    <span>4:30</span>
                </div>

                {/* Control */}
                <div className="control">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.455" height="12.442" viewBox="0 0 10.455 12.442">
                        <path d="M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,
                        7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z"
                            transform="translate(-61.52 0)" fill="#4b537b" />
                        <rect id="Rectangle_15" data-name="Rectangle 15" width="1" height="12" rx="0.5" transform="translate(0.432 0.221)" fill="#4b537b" />
                    </svg>
                    <img src={Group8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer