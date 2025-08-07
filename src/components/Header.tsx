import Container from "./ui/Container"
import Logo from '../assets/SVG'
import Link from "next/link"
import { Button } from "./ui/button"
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


function Navbar() {
  return (
    <nav className="py-2.5 bg-navbarBackground">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <ul className="hidden xl:flex items-center gap-7.5 capitalize text-white text-base font-medium">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Pages</Link>
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
          <span className="text-white text-4xl md:text-5xl lg:text-6xl inline xl:hidden">
            <HiOutlineMenuAlt4 />
          </span>
          <Button className="hidden text-base font-bold !px-5 py-6 rounded-full bg-btncolor hover:bg-navbarBackground
           hover:border-x border-x border-transparent hover:border-white transition-all
            duration-300 xl:flex items-center gap-4">Get a quote <FaArrowRightLong /></Button>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar