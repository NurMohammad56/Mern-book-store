import React from 'react';
import Slider from "./Slider.jsx";



const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-green-200 items-center">
            <div className='flex flex-col md:flex-row justify-between w-full items-center gap-12 py-32'>
            {/*Left side*/}
                <div className={`md:w-1/2 space-y-7 h-full`}>
                <h2 className="text-5xl font-bold leading-snug text-black">Buy And Sell Your Book <span className={`text-textColor`}>For the Best Prices</span></h2>
                <p className={`md:w-4/5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div>
                    <input type="text" name="search" id="search" placeholder="Search a book" className={`py-2 px-2 rounded-sm outline-none`}/>
                    <button className={`bg-textColor px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300`}>Search</button>
                </div>
                </div>

            {/*Right side*/}
                <div>
                    <Slider/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
