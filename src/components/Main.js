import React from 'react'
import img3 from '../images/obj.png'

function Main() {
  return (
   <div className= ' lg:flex lg:mx-8 lg:mb-11 font-sans xl:ml-28'>
      <div className='md:flex md:justify-center  lg:flex-1 lg:order-2 '>
        <img src={img3} className='outline outline-white shadow-2xl md:h-[370px] lg:h-[310px] xl:mr-10' alt='img'/>
      </div>
      <div className='py-8 p-4 md:mt-4 lg:flex-1 md:text-center md:py-9 lg:text-start lg:order-1 xl:ml-[10px] '>
        <p className='text-[16px] font-bold pb-4 md:text-[20px] lg:text-[21px] xl:text-[24px]'>
          Start your <span className='text-[#12B1BE]'>cloud ERP journey </span>by adopting a ready-to-run solution
        </p>
        <p className='text-[15px] lg:text-[16px] pb-4 xl:text-[18px]'>Run, build, and grow your business with a cloud ERP that gives you industry best practices and helps build your own breakthroughs.</p>
        <button className='bg-[#12B1BE] text-white rounded font-bold p-2 text-[13px] lg:text-[15px] lg:p-2 md:p-2 xl:text-[16px]'>Explore Grow with Qloron</button>
      </div>
   </div>
  )
}

export default Main


// lg:flex-1 lg:order-2