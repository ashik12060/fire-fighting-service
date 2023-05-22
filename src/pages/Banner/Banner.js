import React from 'react';
import './Banner.css';
import back_img from '../../images/fireman.jpg'
import Form from '../../Form/Form';
const Banner = () => {
    return (
        <div className='flex sm:flex-col'>
            <div><img src={back_img} alt="nature" /></div>
            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-1'>

                    <div className=" text-block-revised ">
                        <div className='banner-section text-7xl' ><h1><span className='text-white'>Saved</span> <span className='text-[#F01313]'>4800</span><span className='text-white'>+ Lives</span></h1>
                            <h1><span className='text-white'>Protecting </span><span className='text-[#F01313]'>Properties</span></h1>
                        </div>
                        <div className='banner-section text-white text-xl pt-4'>
                            <h4>Fire Fighter Team Saved  6000+ Lives & 9200 acres of forest from fire.</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;