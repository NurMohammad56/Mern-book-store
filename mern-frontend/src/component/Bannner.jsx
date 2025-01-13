import React from 'react';

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-gradient-to-r from-amber-200 to-purple-300  items-center">
            <div className='flex flex-col md:flex-row justify-between w-full items-center gap-12 py-32'>
            {/*Left side*/}
                <div className={`md:w-1/2 space-y-7 h-full`}>
                <div className="text-5xl font-bold leading-snug text-black">Buy And Sell Your Book</div>
                <p className={`md:w-4/5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div>
                    <input type="text" name="search" id="search" placeholder="Search a book" className={`py-2 px-2 rounded-sm outline-none`}/>
                    <button className={`bg-textColor px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300`}>Search</button>
                </div>
                </div>

            {/*Right side*/}
                <div>Right side</div>
            </div>
        </div>
    );
};

export default Banner;
