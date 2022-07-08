import React from 'react';
import Ios from "../img/App Store.png";
import Andriod from "../img/androidDownload.png";

const DownloadAds = () => {
    const downloadImgStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className="download flex">
    <img className={`mr-[2rem] ` + downloadImgStyle} src={Ios} alt="" />
    <img className={downloadImgStyle} src={Andriod} alt="" />
    </div>
  )
}

export default DownloadAds