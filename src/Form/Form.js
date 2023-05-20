import React from 'react'

const Form = () => {
    return (
        <div>
            
            <form className='mt-10'>
             
            <div className="min-h-screen p-6  flex items-center justify-center ">
                 
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <h1 className='text-red text-3xl'>For any query, let us know!</h1>
                        <hr/>
                            <div className="grid gap-4 gap-y-2 grid-cols-1 lg:grid-cols-3 pt-6">

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">

                                    <div className="md:col-span-5 text-left">
                                            <label for="address" className='text-2xl'>First Name</label>
                                            <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="first name..." />
                                        </div>

                                        <div className="md:col-span-5 text-left">
                                            <label for="city" className='text-2xl'>Last Name</label>
                                            <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="last name..." />
                                        </div>

                                        <div className="md:col-span-5 text-left">
                                            <label for="email" className='text-2xl'>Email Address</label>
                                            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@demo.com" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label for="address" className='text-2xl'>Address / Street</label>
                                            <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="address/street" />
                                        </div>

                                        <div className="md:col-span-2 text-left">
                                            <label for="city" className='text-2xl'>City</label>
                                            <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="city name" />
                                        </div>
                                        <div className="md:col-span-2 text-left">
                                            <label for="zipcode" className='text-2xl'>Zipcode</label>
                                            <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="zipcode..." value="" />
                                        </div>
                                        <br/>
                                        <div className="md:col-span-5 text-left">
                                            <label for="zipcode" className='text-2xl'>Please describe the query</label>
                                            <textarea className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 py-10" cols="30" rows="10" placeholder="your message..."></textarea>
                                            {/* <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" /> */}
                                        </div>

                                        <div className="md:col-span-5 text-left">
                                            <div className="inline-flex items-left text-l">
                                                <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox text-xl" />
                                                <label for="billing_same" className="ps-2">Agree with terms and conditions</label>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 text-left text-2xl">
                                            <div className="inline-flex items-end">
                                                <button className="bg-[#F01313] hover:bg-white
                                                hover:text-black  hover:border-2 hover:border-red-500 text-white  py-3 px-10 rounded">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
        </div>
    )
}

export default Form;