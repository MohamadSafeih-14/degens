import React from 'react';
import imgBg from '../../assets/image 30 (1).svg';
import logoFooter from '../../assets/Logo (2).svg';
import img1 from '../../assets/Vector (10).svg';
import img2 from '../../assets/Vector (11).svg';
import img3 from '../../assets/Vector (12).svg';
import img4 from '../../assets/Vector (13).svg';
const Footer = () => {
  return (
    <footer className='w-full py-[100px] px-[5%] relative max-lg:text-center'>
        <img className='absolute top-0 left-0 w-full h-full object-cover -z-10 ' src={imgBg}/>
        <div className='flex flex-row flex-wrap justify-between max-lg:flex max-lg:flex-col max-lg:justify-center'>
            <div><img className='max-lg:mb-7' src={logoFooter}/></div>
            <div>
                <p className='text-white mb-5 tracking-wider text-[20px]'>Find us on Social Media</p>
                <div className='flex flex-row justify-center icons-container'>
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                </div>
                </div>
            <div>
                <p className='text-white text-[20px] mb-10'>We’r always happy to help.</p>
                <p className='text-[#a3a3a3] text-[17px]'>ContectThedegens@gmail.com</p>
            </div>
        </div>
        <h4 className='text-center text-white absolute bottom-0 left-[50%] -translate-x-[50%] -translate-y-[50%]'>&#169; 2022.All Right Reserved</h4>
    </footer>
  )
}

export default Footer
