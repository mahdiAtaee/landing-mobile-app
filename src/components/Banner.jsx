import React from 'react'
import Image from 'next/image'


const Banner = () => {
    return (
        <div className='w-screen h-96 overflow-hidden relative'>
                <Image src="/images/banner.jpg" fill className='object-cover' alt='features' />
        </div>
    )
}

export default Banner