import React from 'react';
import heroImg from '../../assets/Vector (8).svg';
import button from '../../assets/Play Demo.svg';
import particles from '../../assets/Frame (1).svg';
const Hero = () => {
  return (
    <section className='hero px-[5%] pt-[50px] flex-row flex max-lg:flex-col-reverse'>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%]'>
            <h1 className='abhaya text-white text-[60px] xl:text-[90px] font-bold'>Build your <br/> Next <span className='inline-block text-[#FF3969] underline'>Product</span> <br/> with Degens.</h1>
            <p className='text-[#bab9b9] tracking-wider text-[15px] xl:text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's.</p>
            <div className='mt-10 flex flex-row'>
                <button className='bg-[#FF3969] relative text-white w-[170px] py-3 mr-6 rounded-lg tracking-wider shadow-sm shadow-pink-700'>Find out more<img src={particles} className='absolute -top-6 -right-10'/></button>
                <button className='relative w-[180px]'><img src={button} className='max-w-full absolute -top-3 left-0 '/></button>
            </div>
        </div>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%] relative'>
            <img className='absolute -right-24 -top-10 max-2xl:hidden w-[100%]' src={heroImg}/>
        </div>
    </section>
  )
}

export default Hero
