import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb, faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div> 
            <section>
                <div>
                    <div className='mt-36'>

                        <h1 className="text-center text-5xl font-semibold text-[#041436]">Services & <span className='text-[#F01313]'>Facilities</span></h1>
                        <hr className='mx-60 mt-4 border-2 border-[#F01313]' />

                    </div>

                    <div className="grid grid-cols-3 w-full mx-auto text-center mt-24">
                        <div className="bg-[#041436] mt-10 mb-10 ml-20 p-20">

                            <FontAwesomeIcon className="text-6xl pb-4 text-[#F01313] " icon={faHandshake} />

                            <h1 className="text-2xl text-[white] text-bold">
                                Ambulance Service
                            </h1>
                            <br />
                            <p className='text-[white]'>
                            The Special Operations Task is a multi faceted is staffed with Homeland Homeland Security.
                                </p>
                        </div>

                        <div className="bg-[#F01313]  p-24">
                            <FontAwesomeIcon className="text-6xl pb-4 text-[#041436] " icon={faLightbulb} />
                            <h1 className="text-2xl text-[white] text-bold">
                                Fire Fighting and Investigation
                            </h1>
                            <br />
                            <p className='text-[white]'>
                            The Special Operations Task is a multi faceted is staffed with Homeland Homeland Security.</p>
                        </div>

                        <div className="bg-[#041436] mt-10 mb-10 me-20 p-20">
                            <FontAwesomeIcon className="text-6xl pb-4 text-[#F01313] " icon={faCircleCheck} />
                            <h1 className="text-2xl text-[white] text-bold">
                                Community Safety
                            </h1>
                            <br />
                            <p className='text-[#d1d5db]'>
                            The Special Operations Task is a multi faceted is staffed with Homeland Homeland Security.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;