import React from 'react'
import like from '../images/like.png'
import dislike from '../images/dislike.png'

function Learn() {
  return (
    <div className='mb-10'>
      <p className='text-center text-[20px] font-bold my-3 xl:text-[26px]'>Ready to learn more ?</p>
      <div className='mb-14 mt-6 flex justify-center'>
        <button className='bg-[#12B1BE] text-white text-[14px] font-bold rounded p-2 xl:text-[17px]'>Contact Us</button>
      </div>
      <div className='bg-[#12B1BE] h-24'>
        <p className= 'text-white text-[15px] font-bold text-center pt-4 lg:text-[17px]'>How is your experience with this page?</p>
        <div className='flex justify-center my-3'>
          <img src={like} alt='img' className='mx-3'/> 
          <img src={dislike} alt='img'/>
        </div>
      </div>
    </div>
  )
}

export default Learn
