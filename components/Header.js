import React from 'react'
import Image from 'next/image'
import avatar from '../public/fern_logo.png'

const Header = ({page}) => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white flex items-center justify-between p-2 lg:px-5 shadow-md">

                {/* Left */}
                <div className='flex items-center'>
                    <h2 className='text-2xl text-fern-green-500 font-bold italic'>FERN</h2>
                </div>

                {/* Center */}
                <div className='flex justify-center'>
                    <h2 className='text-2xl text-fern-green-500 font-bold'>{ page }</h2>
                </div>

                {/* Right */}
                <div className='flex items-center sm:space-x-2 justify-end cursor-pointer'>

                    <div className='hidden md:inline-flex ml-2 items-center rounded-full bg-gray-200  p-2'>
                        <Image
                            className='rounded-full'
                            src= {avatar}
                            width="25"
                            height="25"
                            layout="fixed"
                        />
                        <p className='hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3  ml-2 italic'> 
                            Geoffery Koranteng
                        </p>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header




