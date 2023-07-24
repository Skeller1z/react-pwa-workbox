import React, { useState, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartAmount, setCartAmount] = useState(0);

    // const cartRef = useRef(null);
    // const popoverRef = useRef(null);
    // const { styles, attributes } = usePopper(cartRef.current, popoverRef.current, {
    //     placement: 'bottom',
    //     strategy: 'fixed',
    // });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };

    return (
        <>
            {/* sticky top-0 z-1000 */}
            <nav className="bg-gray-800 fixed top-0 inset-x-0 z-50 animate-fade-down animate-duration-[1000ms]">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-[100px]">
                        <div className="flex items-center justify-start">
                            <div className="flex-shrink-0">
                                <span className="text-white">Logo</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#HomeSection" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</a>
                                <a href="#WhyUsSection" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Why Us</a>
                                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</a>
                                <a href="#content2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact</a>
                                <a href="#content3" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Services</a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="bg-gray-800 p-1 rounded-md text-gray-400 hover:text-white focus:outline-none">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* <div className="flex items-center justify-between">
                        <img
                            className="h-8 w-8 rounded-full"
                            src="path/to/profile-image.jpg"
                            alt="Profile"
                        />
                        <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Profile</span>
                    </div> */}
                        <a href="#HomeSection" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</a>
                        <a href="#WhyUsSection" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Why Us</a>
                        <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Services</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;