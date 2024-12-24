import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import nav from "@/assets/nav.png"
import Image from 'next/image';
import codeAI from "@/assets/codeAI.png"
import { HiOutlineHome } from 'react-icons/hi';
import { LuBookText, LuCodeXml, LuSettings } from 'react-icons/lu';
import { MdCloudQueue, MdOutlineLocalPhone, MdOutlineLogout } from 'react-icons/md';

const OffCanvass = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Navbar for mobile/tablet view  */}
      <nav className="flex justify-between items-center w-[100vw] py-2 bg-white border-b">
        <div className=' px-6 py-2 '><Image src={codeAI} alt='codeAI'></Image></div>
        <div className=' px-6 py-2' onClick={handleShow} ><Image src={nav} alt='nav' /></div>
      </nav>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ 'height': 'auto' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src={codeAI} alt="codeAI" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <select
              name="selector"
              id="selector"
              className="p-2 w-full font-medium border border-2 rounded-md bg-white"
            >
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
            </select>
            <ul className="sidebar-links">
              <li>
                <a href="/repositoryPage">
                  <span className="material-symbols-outlined">
                    <HiOutlineHome size={24} />
                  </span>
                  Repositories
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    <LuCodeXml size={24} />
                  </span>
                  AI Code Review
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    <MdCloudQueue size={24} />
                  </span>
                  Cloud Security
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    <LuBookText size={24} />
                  </span>
                  How To Use
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    <LuSettings size={24} />
                  </span>
                  Setting
                </a>
              </li>
            </ul>
            <ul className="sidebar-links">
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    <MdOutlineLocalPhone size={24} />
                  </span>
                  Support
                </a>
              </li>
              <li>
                <a href="/loginPage">
                  <span className="material-symbols-outlined">
                    <MdOutlineLogout size={24} />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default OffCanvass

