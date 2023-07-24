import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer className='bg-gray-800 h-[200px]'>
                <div className='h-full items-center justify-center lg:justify-between flex'>
                    <div className="mx-6 py-10 text-center md:text-left w-full justify-center flex">
                        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="">
                                <p className='text-gray-300'>Content1</p>
                            </div>

                            <div className="">
                                <p className='text-gray-300'>Content2</p>
                            </div>

                            <div className="">
                                <p className='text-gray-300'>Content3</p>
                            </div>

                            <div className="">
                                <p className='text-gray-300'>Content4</p>
                            </div>
                        </div></div>
                    <div className=' w-screen inset-x-0 bottom-0 h-16 text-center justify-center flex items-center text-white'>
                        © 2023 Copyright: BSV-Console
                    </div>
                </div>
            </footer>
        </>


    )
}

export default Footer