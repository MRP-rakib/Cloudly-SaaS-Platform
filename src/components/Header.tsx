"use client"
import Container from "./ui/Container"
import Logo from '../assets/SVG'
import Link from "next/link"
import { Button } from "./ui/button"
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



type MobileMenuProps = {
  menuOpen: boolean,
  setMenuOpen: (open: boolean) => void
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="py-2.5 bg-navbarBackground fixed w-full top-0 left-0 z-50">
     <div className="relative">
       <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <ul className="hidden lg:flex items-center gap-10 uppercase text-white text-base font-medium transition-all duration-300">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className="group relative cursor-pointer">
              <p>Pages</p>
              <ul className="bg-white w-[200px] absolute left-0 group-hover:top-[45px] top-[80px]
               transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible border-t-4 border-Primary text-black flex flex-col gap-3 p-5">
                <li className="hover:text-Primary">
                  <Link href='/'>about us</Link>
                </li>
                <li className="hover:text-Primary">
                  <Link href='/'>our team</Link>
                </li>
                <li className="hover:text-Primary">
                  <Link href='/'>our pricing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/'>Services</Link>
            </li>
            <li>
              <Link href='/'>Project</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
            <li>
              <Link href='/'>Contact us</Link>
            </li>
          </ul>
          <span onClick={() => setMenuOpen(true)} className="text-white text-4xl md:text-5xl lg:text-6xl inline lg:hidden">
            <HiOutlineMenuAlt4 />
          </span>
          <Button className="hidden text-base font-bold !px-5 !py-6 rounded-full bg-Primary hover:bg-navbarBackground
           hover:border-x border-x border-transparent hover:border-white transition-all cursor-pointer
            duration-300 lg:flex items-center gap-4">Get a quote <FaArrowRightLong /></Button>
        </div>
      </Container>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     </div>
    </nav>
  )
}

function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  const [submenu, setSubmenu] = useState(false)
  return (
    <div className={`bg-[rgba(0,0,0,0.5)] h-[100vh] ${menuOpen && 'w-full opacity-100 visible'} w-0 transition-all duration-300 flex justify-end  opacity-0 invisible lg:hidden absolute top-0 right-0 overflow-x-hidden`}>
      <div className=" w-full sm:w-[60%] md:w-[50%] bg-white p-5 flex flex-col gap-10 transition-all duration-300 overflow-y-auto">
        <div className="flex items-center justify-between">
          <Logo fill="#7D1FE3" fill1="black" />
          <span onClick={() => setMenuOpen(false)} className="w-[32px] h-[32px] rounded-full bg-Primary text-white flex items-center justify-center text-2xl cursor-pointer">
            <MdClose />
          </span>
        </div>
        <ul className="flex flex-col uppercase text-black text-base font-medium transition-all duration-300 divide-y">
          <li className="py-2">
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setSubmenu(prev => !prev)} className="group relative cursor-pointer py-2">
            <span className="flex items-center justify-between">
              <p>Pages</p>
              {submenu ? <FaMinus /> : <FaPlus />}

            </span>


          </li>

          <li className={`${submenu && ' visible opacity-100 h-full py-2 '} px-4 h-0 overflow-hidden opacity-0 invisible transition-all duration-300 hover:text-Primary`}>
            <Link href='/'>about us</Link>
          </li>
          <li className={`${submenu && ' visible opacity-100 h-full py-2 '} px-4 h-0 overflow-hidden opacity-0 invisible transition-all duration-300 hover:text-Primary`}>
            <Link href='/'>our team</Link>
          </li>
          <li className={`${submenu && ' visible opacity-100 h-full py-2 '} px-4 h-0 overflow-hidden opacity-0 invisible transition-all duration-300 hover:text-Primary`}>
            <Link href='/'>our pricing</Link>
          </li>

          <li className="py-2">
            <Link href='/'>Services</Link>
          </li>
          <li className="py-2">
            <Link href='/'>Project</Link>
          </li>
          <li className="py-2">
            <Link href='/'>Blog</Link>
          </li>
          <li className="py-2">
            <Link href='/'>Contact us</Link>
          </li>
        </ul>
        <div className="mt-5 flex flex-col gap-5">
          <h5 className="font-bold text-[22px]"> Contact Info</h5>
          <ul className="text-Primary flex flex-col gap-4">
            <li className="text-2xl flex gap-5">
              <CiLocationOn />
              <p className="text-base text-black font-medium">Main Street, Melbourne, Australia</p>
            </li>
            <li className="text-2xl flex gap-5">
              <MdOutlineEmail />

              <p className="text-base text-black font-medium">info@example.com</p>
            </li>
            <li className="text-2xl flex gap-5">
              <CiClock1 />

              <p className="text-base text-black font-medium">Mon-Friday, 09AM - 05PM </p>
            </li>
            <li className="text-2xl flex gap-5">
              <MdOutlineLocalPhone />

              <p className="text-base text-black font-medium">+11002345909</p>
            </li>
          </ul>
          <div>
            <Button className=" text-base font-bold !px-5 !py-6 rounded-full bg-Primary hover:bg-navbarBackground
           hover:border-x border-x border-transparent hover:border-white transition-all
            duration-300 uppercase">upcomming event</Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href='https://www.facebook.com' target="_blank" className="w-[44px] h-[44px] rounded bg-[rgba(0,0,0,0.03)] hover:bg-Primary hover:text-white border flex items-center justify-center text-2xl">
            <BiLogoFacebook />

          </Link>
          <Link href='https://www.x.com' target="_blank" className="w-[44px] h-[44px] rounded bg-[rgba(0,0,0,0.03)] hover:bg-Primary hover:text-white border flex items-center justify-center text-2xl">
            <RiTwitterXFill />

          </Link>
          <Link href='https://www.youtube.com' target="_blank" className="w-[44px] h-[44px] rounded bg-[rgba(0,0,0,0.03)] hover:bg-Primary hover:text-white border flex items-center justify-center text-2xl">
            <FaYoutube />

          </Link>
          <Link href='https://www.linkedin.com' target="_blank" className="w-[44px] h-[44px] rounded bg-[rgba(0,0,0,0.03)] hover:bg-Primary hover:text-white border flex items-center justify-center text-2xl">
            <FaLinkedinIn />

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar