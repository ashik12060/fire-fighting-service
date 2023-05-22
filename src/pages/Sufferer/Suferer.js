import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../Form/Form'

// const toTop = document.querySelector(".to-top");
// window.addEventListener("scroll", () =>{
//     if(window.pageYOffset > 100){
//         toTop.classList.add;
//     }
// })

const Suferer = () => {
    return (
        <div>
            <div className='bg-[#e2e8f0] mt-24 py-32'>
                <h2 className='text-5xl text-center mx-52'>If you are suffering because of exposure to firefighting foam, you have the right to protect your future. An experienced liability attorney can help you gather evidence, build a strong case, and fight for a favorable outcome. </h2>
                <div className='mt-10'>

                </div>
                <div className=''>
                    <ul className=" text-2xl bg-[#F01313] text-[white] border-4   px-5 py-3 rounded-full  mx-96">

                        <li><a className="text-white mx-96" href="/contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Suferer