import React from 'react'
import img1 from '../../assets/Mask group (4).svg';
import img2 from '../../assets/Mask group (6).svg';
import img3 from '../../assets/Mask group (5).svg';
import img4 from '../../assets/Mask group (7).svg';
const Portfolio = () => {
  return (
    <section className='px-[5%] w-full h-fit pt-[200px] portfolio'>
      <span className='text-[25px] text-[#a0a0a0]'>Our Works</span>
      <h1 className='text-white text-left text-[70px] abhaya'>Our <span className='text-[#FF3969]'>Portfolio</span></h1>
      <div className='flex w-full flex-row justify-between flex-wrap '> 
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
      </div>
    </section>
  )
}

export default Portfolio
