import React from "react";
import imgg2 from "../images/slide-img.png";

function Slide() {
  return (
    <>
      <div className="relative">
        <img className="w-full h-full object-cover" src={imgg2} alt="img" />

        <div className="p-2 absolute max-w-[370px] left-[34%] top-[50%]  xl:max-w-[570px] lg:max-w-[570px] md:max-w-[570px] text-white transform translate-x-[-50%] translate-y-[-50%] xl:left-[24%] lg:left-[30%] md:left-[30%] xl:top-[45%] lg:top-[50%] md:top-[50%]">
          <p className="font-bold text-sm  md:text-2xl lg:text-3xl xl:text-4xl ">
            Enterprise Resource Planning <br /> (ERP)
          </p>
          <p className=" text-xs mt-3 md:text-base lg:text-md xl:text-lg xl:mt-8 lg:mt-7 md:mt-4">
            Run at your best with market-leading Financial ERP Software
          </p>
          <button className=" p-1 mt-4 bg-white text-[#0680AC] text-[10px] xl:p-3 lg:p-2.5 md:p-2 font-bold xl:mt-8 lg:mt-7 md:mt-4 xl:text-[15px] lg:text-[14px] rounded">
            Request a demo
          </button>
        </div>
      </div>


      <div className="text-center py-6 mx-2">
        <p className="font-bold text-[15px] py-2 md:text-[19px] lg:text-[23px] xl:text-[26px]">We have the right <span className="text-[#12B1BE]">cloud ERP</span> for you</p>
        <p className="text-[13px] md:text-[16px] md:my-2 lg:text-[17px] lg:mx-24 xl:mx-44">Whether adopting your first ERP or migrating from an existing one to the cloud, you can gain a complete,
           modular solution with the AI and analytics capabilities to move your business forward.</p>
      </div>
    </>
  );
}

export default Slide;
