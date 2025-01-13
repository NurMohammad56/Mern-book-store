import React from 'react';

const Banner = () => {
    return (
        <div className="px-4 lg:px-4 bg-teal-100 items-center">
            <div className='flex flex-col md:flex-row justify-between w-full items-center gap-12 py-40'>
            {/*Left side*/}
                <div>Left side</div>

            {/*Right side*/}
                <div>Right side</div>
            </div>
        </div>
    );
};

export default Banner;
