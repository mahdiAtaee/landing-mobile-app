'use client'
import React from 'react'
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AnimatedTitle from '@/partials/AnimatedTitle';

const Opinion = () => {
    const customers = [1, 2, 3, 4]
    return (
        <div className='w-screen min-h-dvh overflow-hidden relative bg-black'>
            <div className='w-screen flex items-center justify-center pt-20 text-center my-8'>
                <AnimatedTitle title="Hear From Our <br /> Community <br /> Testimonials" ContainerClass="mt-5 !text-center !text-blue-50" />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {customers.map((customer) => (
                    <SwiperSlide>
                        <div className='w-[70%] h-64 md:min-h-96 mx-auto'>
                            <div className='flex justify-between items-center p-4'>
                                <span className='text-xs md:text-lg text-blue-50'>Katrina malone</span>
                                <Image src={`/images/t-${customer}.jpg`} width={50} height={50} alt='person' className='rounded-2xl' />
                            </div>
                            <p className='text-xs md:text-lg text-blue-50'>
                                "I absolutely love this plant care program!
                                It made understanding my houseplants' needs so simple.
                                My plants are thriving, and I’ve even started growing new ones.
                                Highly recommend for beginners and green thumbs alike!""
                            </p>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export default Opinion