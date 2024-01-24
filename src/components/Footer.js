import React from 'react'
import insta from '../images/insta.png';
import linkdlin from '../images/linkdlin.png';
import facebook from '../images/facebook.png';
import youtube from '../images/utube.png';

function Footer() {
  return (
    <>
    <div className='bg-[#000000] text-white p-9 font-sans'>
      <div className='xl:flex lg:flex md:flex'>
        <div className='text-[14px] lg:text-[16px] lg:text-start text-center lg:w-[30%] xl:w-[30%] md:w-[40%] lg:p-7 md:p-5'>
            <p className='mb-5 px-8'>Design amazing digital experiences that create more happy in the world.</p>
        </div>
        <div className=' text-[14px] lg:text-[15px] grid grid-cols-2 gap-5 px-16 xl:grid-cols-5 lg:p-7 md:p-5  xl:w-[70%] lg:w-[70%] md:w-[60%] lg:grid-cols-5 md:grid-cols-3'>

            <ul>
                <li className='text-[#98A2B3] py-1'>Product</li>
                <li className='py-1'>Overview</li>
                <li className='py-1'>Features</li>
                <li className='py-1'>Solutions</li>
                <li className='py-1'>Tutorials</li>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Releases</li>
            </ul>

            <ul>
                <li className='text-[#98A2B3] py-1'>Company</li>
                <li className='py-1'>About us</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>News</li>
                <li className='py-1'>Media kit</li>
                <li className='py-1'>Contact</li>
            </ul>


            <ul>
                <li className='text-[#98A2B3] py-1'>Resources</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Newsletter</li>
                <li className='py-1'>Events</li>
                <li className='py-1'>Help centre</li>
                <li className='py-1'>Tutorials</li>
                <li className='py-1'>Support</li>
            </ul>


            <ul>
                <li className='text-[#98A2B3] py-1'>Social</li>
                <li className='py-1'>Instagram</li>
                <li className='py-1'>linkedlin</li>
                <li className='py-1'>Facebook</li>
                <li className='py-1'>YouTube</li>
                <li className='py-1'>Twitter</li>
            </ul>


            <ul>
                <li className='text-[#98A2B3] py-1'>Legal</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Cookies</li>
                <li className='py-1'>Licenses</li>
                <li className='py-1'>Settings</li>
                <li className='py-1'>Contact</li>
            </ul>
        </div>
      </div>
    </div>

    <div className='bg-[#262E3A] text-white font-sans'>
        <div className='flex justify-between items-center h-16 xl:mx-24 lg:mx-24 md:mx-24 '>
            <div className='text-[14px]'>
                <p>© 2023 Qloron All rights reserved.</p>
            </div>
            <div className='flex'>
                <img src={insta} alt='social-media' className='mx-2'/>
                <img src={linkdlin} alt='social-media' className='mx-2'/>
                <img src={facebook} alt='social-media' className='mx-2'/>
                <img src={youtube} alt='social-media' className='mx-2'/>
            </div>
        </div>
      </div>

    </>
  )
}

export default Footer
