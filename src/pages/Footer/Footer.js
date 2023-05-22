import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className=" bg-[#1e1b4b]">

            <div className="flex lg:flex-row w-4/5 p-24  mx-auto justify-between  text-white mt-24">
                <div className='text-left'>

                    <h1 className="text-2xl font-semibold ">Quick Links</h1>
                    <li><a href="#">The company</a></li>
                    <li><a href="#">Our team</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy PolicyContact</a></li>
                </div>

                <div className='text-left'>
                    <h1 className="text-2xl font-semibold">Latest News</h1>
                    <li><a href="#">Fire Prevention </a></li>
                    <li><a href="#">Safety Tips</a></li>
                    <li><a href="#">Donors</a></li>
                    <li><a href="#">Meet the Team</a></li>
                    <li><a href="#">Fire Brigade</a></li>
                </div>

                <div className='text-left'>
                    <h1 className="text-2xl font-semibold ">Contact & Location</h1>
                    <p>Phone: ############</p>
                    <p>Fax: ###.###.###</p>
                    <address>
                        <h2>Address</h2>
                        <p>Kalabagan, Dhanmondi <br />
                            NW Suite 300 <br />
                            Dhaka-1205 <br />

                        </p>
                    </address>
                </div>
            </div>
            <hr className='text-red' />
            <br /><br />
            <p className='text-[white] text-center  pb-4'>Copyright &#169; 2023 FireFighter- All Right Reserved </p>
        </div>
    )
}

export default Footer;