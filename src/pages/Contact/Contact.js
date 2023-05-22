import React from 'react'

const Contact = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                    <h2 id='contact-id' class="mb-4 text-5xl tracking-tight font-extrabold text-center text-[#1e1b4b] dark:text-white">For any query, let us know!</h2>
                    <hr className='mt-4 border-2 border-[#F01313]' />
                    <p class="mt-10 mb-8 lg:mb-16 text-center text-black-500 font-semibold dark:text-gray-400 sm:text-xl">Got a issue? Want to know about our service? Need any help or backup or anything wrong? Let us know.</p>
                    <br />
                    <form action="#" class="space-y-8 m-24 ">
                        <div>
                            <div className="md:col-span-5 text-left">
                                <label for="address" className='text-2xl'>How were you exposed to firefighting foam (AFFF)?</label> <br />
                                <select placeholder='know about' class=" bg-gray-200  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full border-2 border-[#F01313]" id="grid-state">
                                    <option><p>--Select--</p></option>
                                    <option>Civilian Firefighter</option>
                                    <option>Military Firefighter</option>
                                    <option>Other military servicemember</option>
                                    <option>No exposure</option>
                                </select>
                            </div>

                            <div className="md:col-span-5 text-left">
                                <label for="address" className='text-2xl'>Do you already have an attorney representing this case?</label> <br />
                                <select placeholder='know about' class="bg-gray-200  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full border-2 border-[#F01313]" id="grid-state">
                                    <option><p>--Select--</p></option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>

                            </div>
                            <div className="mt-10">
                                <label for="name" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300 text-left mt-10" >Your Name</label>
                                <input type="text" id="name" class="shadow-sm bg-gray-50 border-2 border-[#F01313] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name..." required />
                            </div>
                            <div className="">
                                <label for="email" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300 text-left">Your email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border-2 border-[#F01313] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@itech.com" required />
                            </div>

                            <div>
                                <label for="subject" class="block mb-2 text-xl font-semibold  text-gray-900 dark:text-gray-300 text-left">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#F01313] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know your query" required />
                            </div>

                            {/* dsjljjflkds */}
                            <div className="md:col-span-3 text-left">
                                <label for="address" className='text-2xl '>Address / Street</label>
                                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-2 border-[#F01313]" value="" placeholder="address/street" />
                            </div>

                            <div className="md:col-span-2 text-left">
                                <label for="city" className='text-2xl'>City</label>
                                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-2 border-[#F01313]" value="" placeholder="city name" />
                            </div>
                            <div className="md:col-span-2 text-left">
                                <label for="zipcode" className='text-2xl'>Zipcode</label>
                                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-2 border-[#F01313]" placeholder="zipcode..." value="" />
                            </div>


                            {/*  */}
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-xl font-semibold  text-gray-900 dark:text-gray-400 text-left">Your Message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-[#F01313] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>


                            <div className='text-left mt-6 '>
                                <button className='bg-[#F01313] hover:bg-[white] hover:text-[black] border-2 border-[#F01313] rounded-lg text-white text-xl px-5 py-3 '><a href="#home">Send Message</a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;