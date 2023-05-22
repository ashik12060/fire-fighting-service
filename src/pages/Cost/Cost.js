import React from 'react'
import costImg from '../../images/firman c.jpg';
const Cost = () => {
    return (
        <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-52 bg-[#e2e8f0]'>

            <div className='p-24 text-left '>
                <h1 className=' text-6xl '>Ensure <span className="text-[#F01313]">Health demand</span></h1>
                <p className='text-xl pt-6'>For a firefighting operation, there are certain important steps to take in order to ensure that your team members remain healthy and do not succumb to these illnesses or health conditions as a result of their work. Workers’ Compensation insurance may not cover all of the potential perils of a firefighting career (for example, most policies come with many restrictions on heart attacks), so offering Accident & Health Insurance and Group Critical Illness policies will provide comprehensive coverage to your team members. An occupational injury or illness can be a terrible thing, but with the right insurance offerings and workplace health and safety measures, it does not have to be the end of an employee’s career.</p>
                
            </div>

            <div>
                <img className='py-10 w-5/6 rounded-md' src={costImg} alt="fireImage" />
            </div>

        </div>
    )
}

export default Cost