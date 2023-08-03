import React from 'react';
import img1 from '../../assets/157.9523f189 1 (1).svg';
import img2 from '../../assets/158.9e99cb03 1 (1).svg';
import img3 from '../../assets/159.7b977935 1 (1).svg';
import img4 from '../../assets/image 26 (2).svg';
import img5 from '../../assets/Group 6356151 (1).svg';
import img6 from '../../assets/Ellipse 291 (1).svg';
const GetWassified = () => {
  return (
    <section className='wassified px-[5%] pt-[200px] h-fit flex-row flex max-lg:flex-col-reverse text-white relative'>
        <img src={img5} className='absolute top-12 max-xl:hidden right-[35%]'/>
        <img src={img6} className='absolute h-full -left-32 top-10'/>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%]'>
            <span className='text-[#a9a9a9c8] text-2xl'>DRAG & DROP</span>
            <h1 className='text-[60px] abhaya text-white'>Control all elements <br/>
                <span className='text-[#FF3969]'>super</span> easy.
            </h1>
            <div className='container'>
                <div>
                    <img src={img1}/>
                    <div>
                      <h1>Drag Image & SVG</h1>
                      <p>Create beautiful sites at breakneck speed without compromising on your creativit</p>
                    </div>
                </div>
                <div>
                    <img src={img2}/>
                    <div>
                       <h1>Create Custom Field</h1>
                       <p>Keep your brand from & center with your customer</p>
                    </div>
                </div>
                <div>
                    <img src={img3}/>
                    <div>
                       <h1>Custom Attribute</h1>
                       <p>Increase your client retention rate by showing your results and value.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:w-[50%] lg:h-full w-full h-[50%] relative'>
            <img className='absolute -top-20 -right-32 max-xl:hidden' src={img4}/>
        </div>
    </section>
  )
}

export default GetWassified
