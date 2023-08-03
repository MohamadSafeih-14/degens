import React from 'react';
import img1 from '../../assets/76.c8197e3e 3.svg';
import img2 from '../../assets/158.9e99cb03 1 (1).svg';
import img3 from '../../assets/159.7b977935 1 (1).svg';
import img4 from '../../assets/Vector (9).svg';
import img5 from '../../assets/Group 6356151 (1).svg';
import img6 from '../../assets/Ellipse 292.svg';
const Roadmap = () => {
  return (
      <section className='roadmap px-[5%] pt-[200px] h-fit flex-row flex max-lg:flex-col-reverse text-white relative'>
        <img src={img6} className='absolute h-full -right-36 top-10 max-lg:hidden'/>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%] relative'>
            <img className='absolute -top-20 -left-32 max-xl:hidden w-[90%]' src={img4}/>
        </div>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%] relative text-right'>
        <span className='text-[#a9a9a9c8] text-2xl'>EMAIL & SMS BROADCAST</span>
        
 
            <h1 className='text-[60px] abhaya text-white'>We have email, sms<br/>
                <span className='text-[#FF3969]'>Broadcast</span> for you.
            </h1>
            <div className='container'>
                <div className='max-lgflex max-lg:flex-col-reverse'>
                    <div>
                      <p>Create beautiful sites at breakneck speed without compromising on your creativit</p>
                    </div>
                    <img src={img1}/>
                </div>
                <div className='max-lgflex max-lg:flex-col-reverse'>
                    <div className='max-lg:flex-wrap-reverse'>
                       <p>Keep your brand from & center with your customer</p>
                    </div>
                    <img src={img1}/>
                </div>
                <div className='max-lgflex max-lg:flex-col-reverse'>
                    <div className='max-lg:flex-wrap-reverse'>
                       <p>Increase your client retention rate by showing your results and value.</p>
                    </div>
                    <img src={img1}/>
                </div>
            </div>
            <button className='px-8 py-3 mt-7 border-[#bbb] border-[1px] rounded-xl'>Learn More</button>
        </div>
    </section>
  )
}

export default Roadmap
