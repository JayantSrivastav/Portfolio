import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Nehaa Singh",
            rating: 5,
            text: "The website Jayant built for our business is a game-changer! It's fast, visually appealing, and perfectly optimized for our users. His expertise in modern web technologies is evident in every detail."
        },
        {
            id: 2,
            name: "Pallavi Srivastava",
            rating: 4,
            text: "The mobile app designed by Jayant exceeded all our expectations. It’s sleek, user-friendly, and runs flawlessly on both Android and iOS. His attention to detail and knowledge of React Native made a huge difference!"
        },
        {
            id: 3,
            name: "Jayant Srivastava",
            rating: 5,
            text: "From front-end design to back-end development with Spring Boot, Jayant delivered a seamless, end-to-end solution. His ability to integrate complex APIs and ensure scalability impressed our entire team"
        },
        {
            id: 4,
            name: "Priyank Mishra",
            rating: 5,
            text: "We relied on Jayant to revamp our back-end with Spring Boot, and the results were outstanding. The application is now faster, more secure, and handles high traffic effortlessly. Truly a professional at work!"
        },
        {
            id: 5,
            name: "Vishal Singh",
            rating: 4,
            text: "Working with Jayant was a pleasure. He truly understood our requirements and brought them to life in both the web and mobile apps. His mastery of Spring Boot and cross-platform development saved us time and resources."
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What our Customer Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>Software Developer</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
