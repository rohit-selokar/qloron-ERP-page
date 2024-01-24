import React from 'react'
import bgLead from '../images/bg- lead.png'
import lead from '../images/lead.png'

function Lead() {
  return (
    <>
        <div className='text-center relative'>
          <img src={bgLead} alt='img-error' className='w-full h-40 lg:h-28 xl:h-29 md:h-36' />
            <div className='absolute left-[50%] top-[50%] w-full transform -translate-x-1/2 -translate-y-1/2 lg:grid grid-cols-3 lg:gap-4 lg:items-center lg:pl-24 xl:gap-8 xl:pl-28'>

                <p className='font-bold text-[14px] py-2 md:text-[17px] lg:text-[17px] xl:text-[19px]'>
                  Manage inflation challenges
                </p>

                <p className='text-[14px] py-2 md:text-[16px] lg:text-[16px] lg:text-start'>
                  Qloron has the right solutions to help guide you through these unprecedented times.
                </p>

                <button className='bg-[#12B1BE] text-white text-[13px] px-2 my-2 p-1.5 font-bold md:p-2 lg:text-[15px] lg:p-2 lg:w-[105px] lg:ml-7 rounded'>
                  Learn More
                </button>
            </div>
        </div>



        <div className='mb-5'>
            <p className='text-center font-bold text-[17px] py-4 md:text-[19px] lg:text-[24px] lg:py-5 xl:text-[27px]'> <span className='text-[#12B1BE]'>Take the lead</span> in your industry</p>
            <img src={lead} alt='img-error' className='h-44 md:w-full md:h-auto md:object-cover lg:w-full lg:object-cover lg:h-auto xl:w-full xl:object-cover xl:h-[390px]'/>
        </div>
    </>
  )
}

export default Lead
