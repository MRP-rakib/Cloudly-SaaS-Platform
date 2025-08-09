'use client'
import Image from 'next/image'
import React from 'react'
import Container from './ui/Container'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";



function WhoWeAreSection() {
    return (
        <section className='py-10 md:py-[60px] lg:py-[120px]'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                    <div>
                        <span className='py-[6px] px-3 border border-Primary rounded-full text-Primary text-[18px] lg:text-[20px]'>Who We Are</span>
                        <h2 className='text-2xl md:text-3xl lg:text-[48px] font-bold mt-4 lg:mt-6'>Crafting Ideas into Digital Impact</h2>
                        <p className='text-[14px] lg:text-base text-textColor mt-4 lg:mt-6'>
                            In vestibulum dui a odio pharetra, nec accumsan sapien consectetur. Pellentesque magna risus, volutpat a vestibulum ut, tempus et quam. Nulla vitae erat blandit, mattis nisl ut, venenatis enim. Maecenas tempus arcu tincidunt.
                        </p>
                        <div className='flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6'>
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-4'>
                                    <Image src='/cheak.svg' width={18} height={18} alt='check' />
                                    <h4 className='text-base lg:text-[18px] font-semibold'>Smart Automation</h4>
                                </div>
                                <p className='text-[14px] lg:text-base text-textColor'>Streamline repetitive tasks and workflows with intelligent automation tools.</p>
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-4'>
                                    <Image src='/cheak.svg' width={18} height={18} alt='check' />
                                    <h4 className='text-base lg:text-[18px] font-semibold'>Smart Automation</h4>
                                </div>
                                <p className='text-[14px] lg:text-base text-textColor'>Streamline repetitive tasks and workflows with intelligent automation tools.</p>
                            </div>
                        </div>
                        <Button className="text-[14px] lg:text-base font-bold px-4 lg:!px-5 py-5 lg:!py-7 rounded-full bg-Primary 
                       transition-all cursor-pointer hover:bg-navbarBackground
                        after:duration-800  overflow-hidden mt-4 lg:mt-6
                       duration-300 capitalize "><span className=" relative z-30 flex items-center gap-4">discover More <FaArrowRightLong /></span></Button>
                    </div>
                    <motion.div  initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
        style={{ originX: 1 }}>
                        <Image src='/01.png' width={636} height={618} alt='01' className=' shadow-Primary' />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default WhoWeAreSection