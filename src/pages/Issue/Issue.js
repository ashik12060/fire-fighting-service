import React from 'react'
import issueimage from '../../images/fireman h.jpg'
const Issue = () => {
    return (
        <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-52'>

            <div>
                <img className='h- w-5/6 rounded-md ms-24' src={issueimage} alt="fireImage" />
            </div>

            <div className='pe-24 text-left pt-20'>
                <h1 className=' text-6xl'>Issue <span className="text-[#F01313]">Identify</span></h1>
                <p className='text-xl pt-6'>Firefighters face serious risks on the job such as heat exhaustion, burns, physical and mental stress. Additionally, they frequently come into contact with high levels of carbon monoxide and other toxic hazards. With these dangerous exposures, this line of work presents a likelihood for many diseases. Firefighters who smoke or engage in other unhealthy lifestyle habits are at even a greater risk. Smoking increases the risk of getting heart disease, cancer, respiratory illnesses, stress, and poorer treatment outcomes for certain diseases, such as hepatitis.</p>
                
            </div>

        </div>
    )
}

export default Issue