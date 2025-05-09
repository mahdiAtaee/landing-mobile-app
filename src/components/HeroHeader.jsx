import React from 'react'
import Image from 'next/image'
import { Audiowide, Open_Sans  } from 'next/font/google'

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: ['400']
})


const  openSans= Open_Sans({
    subsets: ['latin'],
    weight: ['400', '300']
})

const HeroHeader = () => {
    return (
        <div className='h-dvh w-screen bg-black relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] via-[#013764] to-[#7400a1] overflow-hidden'>
            <div className='w-screen h-screen text-center flex items-start justify-center pt-25'>
                <p className={`text-blue-50 h-max text-4xl md:text-9xl ${audiowide.className}`}>
                    Boost Your <br />
                    Productivity <br />
                    with Problukitify
                </p>
            </div>
            <Image width={300} height={400} src="/images/hero-1.png" alt='hero' className='block absolute -bottom-28 md:bottom-0 left-1/2 -translate-x-1/2 scale-100 md:scale-200' />

            <div className='absolute bottom-1/3 left-24 hidden md:block'>
                <div className='rounded-2xl bg-gradient-to-r from-transparent to-[#0f172a] text-white flex items-center justify-between gap-2 p-4'>
                    <div className='bg-blue-300 rounded-xl w-[50px] h-[50px] relative p-1'>
                        <Image src="/images/a-1.png" fill alt='user' className='object-cover rounded-xl drop-shadow-2xl'/>
                    </div>
                    <p className={`text-blue-50 text-lg leading-6 ${openSans.className} font-medium`}>
                        Very Beautiful app and <br /> very useful application
                    </p>
                </div>
            </div>

            <div className='absolute bottom-1/3 right-24 hidden md:block'>
                <div className='rounded-2xl bg-gradient-to-r from-transparent to-[#0f172a] text-white flex items-center justify-between gap-2 p-4'>
                    <div className='bg-blue-300 rounded-xl w-[50px] h-[50px] relative p-1'>
                        <Image src="/images/a-1.png" fill alt='user' className='object-cover rounded-xl drop-shadow-2xl'/>
                    </div>
                    <p className={`text-blue-50 text-lg leading-6 ${openSans.className} font-medium`}>
                        Very Beautiful app and <br /> very useful application
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader