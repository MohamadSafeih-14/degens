import React, { useState } from 'react';
import logo from '../../assets/Logo (2).svg';
import icon1 from '../../assets/All Icons.svg';
import icon2 from '../../assets/Twitter.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return ( 
    <nav className='bg-[#101331] px-[5%] w-full h-[110px]'>
        <div className='flex flex-row justify-between w-full h-full'>
            <img src={logo} className='w-[230px] max-xl:relative z-50'/>
            <ul className=' flex-row text-white justify-between w-[60%] mt-11 tracking-widest hidden xl:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Get Wassified</li>
                <li>Rewards</li>
                <li>Roadmap</li>
                <li>Team</li>
                <div className='flex flex-row'>
                <li className='mx-4'><img src={icon1}/></li>
                <li><img src={icon2}/></li>
                </div>
            </ul>

            {menu ? <AiOutlineClose onClick={() => setMenu(!menu)} className='text-white text-[35px] mt-10 xl:hidden relative z-50'/> : <AiOutlineMenu onClick={() => setMenu(!menu)} className='text-white text-[35px] mt-10 xl:hidden relative z-50' />}
            
            {menu ?             <ul className='flex flex-col text-white justify-center items-center w-[100%] mt-11 tracking-widest  absolute h-full bg-[#101331] left-0 top-0 mobile-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Get Wassified</li>
                <li>Rewards</li>
                <li>Roadmap</li>
                <li>Team</li>
                <div className='flex flex-row'>
                <li className='mx-4'><img src={icon1}/></li>
                <li><img src={icon2}/></li>
                </div>
            </ul> : <></>}

        </div>
    </nav>
  )
}

export default Navbar
