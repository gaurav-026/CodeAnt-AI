import React from 'react'
import codeAI from '@/assets/codeAI.png'
import Image from 'next/image'
import { HiOutlineHome } from "react-icons/hi";
import { MdCloudQueue, MdOutlineLocalPhone, MdOutlineLogout } from "react-icons/md";
import { LuBookText, LuCodeXml, LuSettings } from 'react-icons/lu';

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className='flex flex-col gap-8'>
          <Image src={codeAI} alt="logo" href='/loginPage' />
          <select name="selector" id="selector" className='p-2 w-full font-medium border border-2 rounded-md bg-white border-2'>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
            <option value="Option3">Option3</option>
          </select>
        </div>
        
        <ul className="sidebar-links">
          <li>
            <a href="/repositoryPage" >
              <span className="material-symbols-outlined"> <HiOutlineHome size={24}/></span>Repositories</a>
          </li>
          <li>
            <a href="#"
            ><span className="material-symbols-outlined"> <LuCodeXml size={24}/></span>AI Code Review</a>
          </li>
          <li>
            <a href="#"
            ><span className="material-symbols-outlined"> <MdCloudQueue size={24}/></span>Cloud Security</a>
          </li>
          <li>
            <a href="#"
            ><span className="material-symbols-outlined"> <LuBookText size={24}/> </span>How To Use</a>
          </li>
          <li>
            <a href="#"
            ><span className="material-symbols-outlined"> <LuSettings size={24} /> </span>Setting</a>
          </li>
        </ul>
        <br/>
        <br/>
        <ul className="sidebar-links">
          <li>
            <a href="#"
            ><span className="material-symbols-outlined"> <MdOutlineLocalPhone size={24}/> </span>Support</a>
          </li>
          <li>
            <a href="/loginPage"
            ><span className="material-symbols-outlined"> <MdOutlineLogout size={24}/> </span>Logout</a>
          </li>
        </ul>

      </aside>
    </div>
  )
}

export default Sidebar
