import React from 'react';
import './Banner.css';
import back_img from '../../images/fireman.jpg'
import Form from '../../Form/Form';
const Banner = () => {
    return (
        <div>
            <div><img src={back_img} alt="nature" /></div>
            <div>
                <div className=''>

                    <div className="mid-nav text-block-revised ">
                        <div className='banner-section text-7xl' ><h1>Saved <span className='text-[#F01313]'>4800</span>+ Lives</h1>
                            <h1>Protecting <span className='text-[#F01313]'>Properties</span></h1>
                        </div>
                        <div className='banner-section '>
                            <h4>Fire Fighter Team Saved  6000+ Lives & 9200 acres of forest from fire.</h4>
                        </div>
                    </div>
                    <div className=' text-block'>
                        <div>
                       
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;