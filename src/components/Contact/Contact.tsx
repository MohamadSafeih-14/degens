import React from 'react';
import img from '../../assets/Group 6356164 (2).svg';
import img2 from '../../assets/Ellipse 293 (1).svg';
const Contact = () => {
  return (
    <section className='w-full h-fit px-[5%] text-center pt-[100px] relative'>
        <img className='absolute top-16 left-[25%]' src={img}/>
        <img src={img} className='absolute top-[50%] right-[5%]'/>
        <h1 className='text-white abhaya text-center text-[70px]'>Try Degens <span className='text-[#FF3969]'>Free</span></h1>
        <p className='text-[#bfbdbd] tracking-widest mt-[50px]'>After your 14-day trial of our Professional plan, enjoy the Free version of <br/> Calendly – forever.</p>
        <button className='text-white bg-transparent border-[#9f9d9d] border-[1px] px-7 py-4 rounded-lg mt-10'>Get The Degens App</button>
        <p className='text-[#a7a7a7] text-center tracking-widest mt-10'>No Credit Card Required. Cancel Anytime</p>
        <img src={img2} className='absolute bottom-0 left-0 w-full h-full opacity-70'/>
    </section>
  )
}

export default Contact
