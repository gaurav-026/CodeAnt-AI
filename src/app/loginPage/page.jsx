'use client'
import React from 'react'
import icon from '@/assets/icon.png'
import Image from 'next/image'
import { AiFillPieChart } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa6";
import Subtract from '@/assets/Subtract.png';
import codeAI from '@/assets/codeAI.png'

import ToggleSwitch from '@/components/ToggleSwitch';
const Login = () => {
  return (
    <div className='flex'>
      {/* left side  */}
      <div className='bg-white hidden lg:flex lg:w-[55%] h-[100vh] justify-center items-center'>
        <div className='w-fit'>
          {/* Card 1 */}
          <div className='flex flex-col w-fit px-10 py-6 border border-borderColor rounded-3xl gap-6 shadow-outer-glow '>
            <div className='flex gap-2 items-center'><Image src={icon} alt='icon'></Image>
              <h1 className='font-semibold text-xl'>AI to Detect & Autofix Bad Code</h1></div>
            <div className='w-full border '></div>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1 items-center'>
                <span className='font-semibold text-xl'>30+</span>
                <span className='font-medium'>Language Support</span>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <span className='font-semibold text-xl'>10K+</span>
                <span className='font-medium'>Developers</span>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <span className='font-semibold text-xl'>100K+</span>
                <span className='font-medium'>Saved Hours</span>
              </div>

            </div>

          </div>
          {/* Card 2 */}
          <div className='flex flex-col w-fit px-10 py-6 border border-borderColor bg-white rounded-3xl gap-4 shadow-outer-glow relative top-[-20px] left-[170px] '>
            <div className='flex gap-16 items-center'>
              <div className='p-4 rounded-full bg-purpleFill bg-opacity-25'>
                <AiFillPieChart color='#9D90FA' size={24} />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='flex gap-1 items-center text-purpleText font-semibold text-xl'><FaArrowUp /> 14%</span>
                <p>This week</p>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-semibold text-xl'>Issues Fixed</span>
              <span className='font-semibold text-3xl'>200K+</span>
            </div>
          </div>
        </div>
        <div className='absolute left-0 bottom-0 w-40'><Image src={Subtract} alt='subtract'></Image></div>
      </div>

      {/* right side  */}
      <div className='w-full mx-2 lg:w-[45%] h-[100vh] bg-bgColor flex items-center justify-center'>
        <div className='p-3 md:p-4 lg:p-4 rounded-md border bg-white flex flex-col gap-2 items-center'>
          <Image src={codeAI} alt='codeAI' className='py-4' />
          <h1 className='font-semibold text-2xl'>Welcome to CodeAnt AI</h1>
          <div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
