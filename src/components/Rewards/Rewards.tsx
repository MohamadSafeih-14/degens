import React from 'react';
import img1 from '../../assets/Group 6356157 (1).svg';
import img2 from '../../assets/Group 6356158 (1).svg'

const Rewards = () => {
  return (
    <section className='px-[5%] pt-[150px] w-full h-fit'>
        <h1 className='text-center text-white text-[60px] abhaya'>
        Bring all Team <span className='text-[#FF3969]'>Managment</span><br/>
        & task togather 
        </h1>
        <p className='text-center text-[#bcbcbc] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br/> dummy text ever since the 1500s,</p>
        <img className='mx-auto mt-10' src={img1}/>
    <div className="flex flex-row  text-white space-x-4 mt-[30px] justify-center max-lg:flex-col">
      <div className="flex items-center max-lg:mt-6 pl-9">
        <input type="radio" className="form-radio text-indigo-600 h-5 w-5" name="radio-group" id="option1" />
        <label htmlFor="option1" className="ml-5">Create task for any <br /> team person
        </label>
      </div>

      <div className="flex items-center max-lg:mt-6 pl-5">
        <input type="radio" className="form-radio text-indigo-600 h-5 w-5" name="radio-group" id="option2" />
        <label htmlFor="option2" className="ml-5">Make timeframe fordo <br />the task</label>
      </div>

      <div className="flex items-center max-lg:mt-6 pl-5">
        <input type="radio" className="form-radio text-indigo-600 h-5 w-5" name="radio-group" id="option3" />
        <label htmlFor="option3" className="ml-5">Get task complated<br /> byyour member</label>
      </div>
    </div>
    <img src={img2} className='mt-[100px] mx-auto'/>
    </section>
  )
}

export default Rewards
