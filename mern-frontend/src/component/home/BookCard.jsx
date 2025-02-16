import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaCartShopping} from 'react-icons/fa6'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import {Link} from "react-router-dom";


const BookCard = ({books, headline}) => {

    // const backendBaseUrl = 'http://localhost:5000/api/v1';

    return (
        <div className={`my-14 px-4 lg:px-24`}>
            <h2 className={`text-4xl text-center font-bold my-4 `}>{headline}</h2>

        {/*  Book Cards  */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >


                    {books.map(book => (
                        <SwiperSlide key={book._id}>
                            <Link to={`/books/${book._id}`}>
                                <div className={`relative`}>
                                    <img src={book.imageUrl} alt={book.title}/>

                                    <div className={`absolute top-3 right-3 bg-blue-300 hover:bg-black p-2 rounded`}>
                                        <FaCartShopping className={`w-4 h-4 text-white`}/>
                                    </div>
                                </div>
                                <div className={`text-black my-2`}>
                                    <div>
                                        <h6 className={`text-sm font-bold`}>{book.bookTitle}</h6>
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </div>



    );
};

export default BookCard;