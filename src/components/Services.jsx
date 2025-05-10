import AnimatedTitle from '@/partials/AnimatedTitle'
import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='w-screen min-h-dvh overflow-x-hidden'>
            <div className='w-screen flex items-center justify-center pt-20 text-center'>
                <AnimatedTitle title="What we work <br /> Our <br /> Services" ContainerClass="mt-5 !text-3xl md:!text-4xl lg:!text-7xl !text-center !text-black" />
            </div>
            <div className='w-[90%] h-1/2 lg:w-7xl mx-auto my-5 rounded-2xl bg-amber-50 flex flex-col p-4 lg:flex-row items-center justify-around'>
                <Image src="/images/service-1.png" width={800} height={800} alt='mobile' />
                <div className='p-0 md:pr-8 md:p-8'>
                    <h2 className='text-xl md:text-5xl'>Expanse Tracking</h2>
                    <p className='text-xs md:text-lg leading-6 my-4'>
                        If you can’t measure it, you can’t manage it. Therefore, if you're aiming for a successful new app launch, you need to benchmark your app’s launch success against specific criteria.
                    </p>
                    <button className='border rounded-2xl px-4 py-1 '>Tracking</button>
                </div>
            </div>
            <div className='w-[90%] h-1/2 lg:w-7xl mx-auto my-5 rounded-2xl bg-pink-100 flex flex-col lg:flex-row items-center justify-around p-4'>
                <Image src="/images/service-1.png" width={700} height={700} alt='mobile' className='order-2' />
                <div className='p-0 md:pl-8 order-1 md:p-8'>
                    <h2 className='text-xl md:text-5xl'>Expanse Tracking</h2>
                    <p className='text-xs md:text-lg leading-6 my-4'>
                        If you can’t measure it, you can’t manage it. Therefore, if you're aiming for a successful new app launch, you need to benchmark your app’s launch success against specific criteria.
                    </p>
                    <button className='border rounded-2xl px-4 py-1 '>Tracking</button>
                </div>
            </div>
        </div>
    )
}

export default Services