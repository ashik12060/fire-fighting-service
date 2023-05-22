import React from 'react'
import fireimg from '../../images/about firefighter.jpg'
const About = () => {
  return (
    <div  className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-96 '>
      <div className='ps-20 text-left'>
        <h1 id="aboutus" className=' text-6xl'>About <span className="text-[#F01313]">Firebrigade</span></h1>
        <p className='text-xl pt-4'>Protection is fundamental sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut your safety is top priority</p>
        <h1 className=' text-6xl'> <span className='text-[#F01313]'>Precautionary</span>Tips
        </h1>
        <p className='text-xl pt-4'>Protection is fundamental sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut your safety is top priority</p>
      </div>
      <div>
        <img className='sm:ms-20 w-5/6 rounded-md' src={fireimg} alt="fireImage" />
      </div>
    </div>
  )
}

export default About;