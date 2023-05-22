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
                    
                        <li><a className="text-white hover:text-[#F01313]" href="/contact">Contact</a></li>
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}

export default Header;