import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#212529] py-8 sticky top-0 z-50'>
            <nav className="flex justify-between items-center w-[90%]  mx-auto">
                <div className='text-white'>
                    <h1>
                    <a className='text-7xl font-semibold ' href="/home">FireFighther</a>
                    </h1>
                    <p className='text-xl pt-3'>Fire Brigade and Rescue service</p>
                    
                    
                </div>
                <div className=''>
                    <ul className="flex  gap-6 item-center text-2xl">
                        <li className='hover:text-red-500'><a className="text-white hover:text-[#F01313]" href="/home">HOME</a></li>
                        <li><a className="text-white hover:text-[#F01313]" href="/products">PRODUCTS</a></li>
                        <li><a className="text-white hover:text-[#F01313]" href="/booking">BOOKING</a></li>
                        <li><a className="text-white hover:text-[#F01313]" href="/about">ABOUT</a></li>
                        <li><a className="text-white hover:text-[#F01313]" href="/contact">CONTACT</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-white text-[#F01313] border-4 hover:border-red-500  text-3xl px-5 py-3 rounded-full '>Get a Quote</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;