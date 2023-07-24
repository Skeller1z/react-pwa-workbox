import React, { useEffect } from 'react'
import Flash from '../../Assets/images/flash.png'
import Kerry from '../../Assets/images/kerry.png'
import THPost from '../../Assets/images/THPost.png'
import NinjaVan from '../../Assets/images/ninjavan.png'
import Bg2 from '../../Assets/images/bg2.jpg'
import Bg from '../../Assets/images/bg.jpg'

import { Link } from 'react-router-dom'

function HomeSection() {

    return (
        <section className='h-screen flex items-center justify-center ' id='HomeSection' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 bg-white rounded-xl shadow-lg bg-opacity-75 backdrop-filter backdrop-blur-sm animate-fade-down animate-delay-20100 animate-once animate-duration-20500 ">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-purple-800 via-pink-800 to-red-800 text-transparent bg-clip-text  md:text-5xl lg:text-6xl dark:text-white animate-fade-down animate-once animate-ease-linear animate-delay-21000 animate-duration-25000">BSV Console</h1>
                
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <div
                        className="cursor-pointer shadow-md inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 animate-fade-down animate-once animate-ease-linear animate-delay-21000 animate-duration-25000"
                        
                    >
                        Sign in!
                        <svg className="ml-2 -mr-1 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </div>
                    <Link to="/test" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 animate-fade-down animate-once animate-ease-linear animate-delay-21000 animate-duration-25000">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
                            <path d="M10 16h6"></path>
                            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M4 8h3"></path>
                            <path d="M4 12h3"></path>
                            <path d="M4 16h3"></path>
                        </svg>
                        Contact Us
                    </Link>
                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-700 uppercase animate-fade-down animate-once animate-ease-linear animate-delay-21000 animate-duration-25000">GAIN THE TRUST BY</span>
                    <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between animate-fade-down animate-once animate-ease-linear animate-delay-21000 animate-duration-25000 ">
                        <img src={Kerry} className='mr-5 mb-5 lg:mb-0 h-[100px]' alt='Kerry'/>
                        <img src={Flash} className='mr-5 mb-5 lg:mb-0 h-[40px]' alt='Flash'/>
                        <img src={THPost} className='mr-5 mb-5 lg:mb-0 h-[50px]' alt='THPost'/>
                        <img src={NinjaVan} className='mr-5 mb-5 lg:mb-0 h-[60px]' alt='NinjaVan'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection