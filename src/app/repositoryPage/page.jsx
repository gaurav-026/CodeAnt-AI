'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { repositoriesContent } from '@/data'
import { GoDatabase, GoDotFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import OffCanvass from '@/components/OffCanvas';

const Repo = () => {
  return (
    <div className="lg:flex-row flex flex-col bg-bgColor">
      {/* Sidebar */}
      <div className='hidden lg:block'><Sidebar /></div>
      {/* navbar for mobile/tablet  */}
      <div className='lg:hidden fixed '><OffCanvass /></div>
      {/* Main Content */}
      <div className="flex-1  lg:ml-32 lg:mr-10 lg:my-6 my-16">
        <div className="flex flex-col p-6 border border-2 border-borderBlack bg-cardColor rounded-md">
          <div className="lg:flex-row md:flex-row flex-col flex gap-2 lg:justify-between md:justify-between lg:items-center w-full">
            <div className="flex flex-col lg:gap-2">
              <h2 className='lg:text-3xl md:text-3xl text-2xl font-semibold '>Repositories</h2>
              <span className='text-md'>33 total repositories</span>
            </div>
            {/* Buttons */}
            <div className="flex gap-2">
              <button className='flex text-sm gap-2 px-3 py-2 items-center border bg-white rounded-md '><span><LuRefreshCw size={24} /></span>Refresh All</button>
              <button className='flex gap-2 text-sm px-3 py-2 items-center border bg-blue text-white rounded-md '><span><IoMdAdd size={24} /></span>Add Repository</button>
            </div>
          </div>
          <input type="text" placeholder="Search Repositories" className="px-4 py-2 lg:w-fit md:w-fit w-full border border-2 rounded-md bg-white mt-4 w-fit" />
        </div>

        {/* Repositories List */}
        {repositoriesContent.map((repo, index) => (
          <div key={index} className="flex flex-col gap-3 p-6 border border-2 border-borderBlack hover:bg-bgColor bg-cardColor rounded-sm my-1">
            <div className='flex gap-4'>
              <span className='font-medium lg:text-2xl md:text-2xl text-xl'>{repo.repoName}</span>
              <span className='text-typeColor bg-typeBgColor border border-typeBorderColor text-md px-3 rounded-full'>{repo.type}</span>
            </div>
            <div className='flex lg:gap-10 md:gap-10 gap-4'>
              <div className='flex gap-1 items-center'><span className='lg:text-md md:text-md text-sm'>{repo.language}</span> <span><GoDotFill color='blue' /></span></div>
              <div className='flex gap-1 items-center'> <span><GoDatabase /></span> <span className='lg:text-md md:text-md text-sm'>{repo.fileSize}</span></div>
              <span className='lg:text-md md:text-md text-sm'>{repo.updatedAt}</span>
            </div>

          </div>
        ))}
      </div>
    </div>

  )
}

export default Repo
