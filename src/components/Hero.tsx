'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";

function Hero() {
    return (
        <section className="bg-[url('/hero.jpg')] bg-cover bg-center relative">
            <motion.div animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute top-[190px] left-[213px] hidden xl:inline'>
                <Image src='/hero-1.png' width={271} height={199} alt='hero1' />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute top-[48%] left-[240px] hidden xl:inline'>
                <Image src='/shape-1.png' width={64} height={64} alt='shape1' />
            </motion.div>
            <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute top-[53%] left-[300px] hidden xl:inline'>
                <Image src='/hero-2.png' width={348} height={259} alt='hero2' />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute bottom-[85px] left-[34%] hidden xl:inline'>
                <Image src='/shape-2.png' width={64} height={64} alt='shape2' />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute bottom-[120px] left-[42%] hidden xl:inline'>
                <Image src='/hero-3.png' width={226} height={85} alt='hero1' />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute bottom-[182px] right-[32%] hidden xl:inline'>
                <Image src='/shape-3.png' width={64} height={64} alt='hero1' />
            </motion.div>
            <motion.div animate={{ x: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute bottom-[127px] right-[12%] hidden xl:inline'>
                <Image src='/hero-4.png' width={306} height={284} alt='hero1' />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                className=' absolute top-[220px] right-[156px] hidden xl:inline'>
                <Image src='/hero-5.png' width={294} height={221} alt='hero1' />
            </motion.div>
            <div className="flex items-center flex-col justify-center py-[100px] md:py-[130px] xl:py-[250px] max-w-[1070px] mx-auto px-4">
                <div className="bg-navbarBackground text-[14px] lg:text-base py-[6px] px-[18px] text-[rgba(255,255,255,0.56)] rounded-full flex items-center gap-2">
                    <Image src='/group.png' width={133} height={24} alt="group" />
                    <strong> 1,000+ Happy customers worldwide</strong>
                </div>
                <div className="text-white text-center mt-4 lg:mt-6 flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl lg:text-[64px] font-bold">Smarter Solutions for Modern Marketing</h1>
                    <p className="text-[14px] lg:text-base max-w-[900px] mx-auto">Aliquam finibus odio sollicitudin vestibulum tincidunt. Nullam vel fringilla elit. Donec sapien libero, auctor ut sollicitudin non, cursus ut mauris Duis turpis neque, lobortis ut auctor eu.</p>
                </div>
                <div className="mt-6 lg:mt-12 flex flex-col md:flex-row items-center gap-5">
                    <Button className="text-[14px] lg:text-base font-bold px-4 lg:!px-5 py-5 lg:!py-7 rounded-full bg-Primary 
                       transition-all cursor-pointer hover:bg-navbarBackground
                        after:duration-800  overflow-hidden 
                       duration-300  uppercase "><span className=" relative z-30 flex items-center gap-4">try it free <FaArrowRightLong /></span></Button>
                    <Button className="text-[14px] lg:text-base font-bold px-4 lg:!px-5 py-5 lg:!py-7 rounded-full bg-navbarBackground hover:bg-Primary border hover:border-transparent
                       transition-all cursor-pointer  duration-300 capitalize "><span className=" relative z-30 flex items-center gap-4">watch Demo <FaArrowRightLong /></span></Button>
                </div>
            </div>
        </section>
    )
}

export default Hero