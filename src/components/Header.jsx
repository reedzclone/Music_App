import React from 'react'
import CenterMenu from './CenterMenu'

const Header = () => {
    const btnStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:cursor-pointer hover:bg-[#232A4E] mb-[0.5rem]"
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem]
    text-[0.8rem]">
        {/* logo */}
        <img className="logo w-[42px] h-[42px]" src="" alt="logo" />
        {/* Menu */}
        <CenterMenu />
        {/* Button */}
        <div className="btn flex">
            <button className={`mr-[2rem] ` + btnStyle}>Sign up</button>
            <button className={btnStyle}>Log in</button>
        </div>
        
    </div>
  )
}

export default Header
