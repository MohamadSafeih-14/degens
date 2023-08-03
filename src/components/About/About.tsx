import React from 'react'
import img1 from '../../assets/Group 48.svg';
import img2 from '../../assets/Group 49.svg';
import img3 from '../../assets/Group 50.svg';
import img4 from '../../assets/Group 51.svg';
import particles from '../../assets/Group 4 (1).svg'
const About = () => {
  return (
    <section className='px-[5%] py-[200px] h-fit w-full relative'>
        <img className='absolute top-72 right-20 max-xl:hidden' src={particles}/>
        <h1 className='abhaya text-white text-center font-bold text-[60px] mt-20'>
            Check why you <span className='text-[#FF3969]'>Should</span><br/>
            Choose us
        </h1>
        <div className='flex flex-wrap justify-between w-full about-container mt-[120px]'>
            <div>
                <img src={img1}/>
                <h1>Appoinments</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div>
                <img src={img4}/>
                <h1>Fast Support</h1>
                <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
            <div>
                <img src={img3}/>
                <h1>App Integrations</h1>
                <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
            </div>
            <div>
                <img src={img2}/>
                <h1>Customization</h1>
                <p>We deliver outsourced aviation services for military customers</p>
            </div>
        </div>
    </section>
  )
}

export default About
