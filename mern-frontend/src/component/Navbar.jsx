import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FaBook} from "react-icons/fa";
import {FaBarsStaggered} from "react-icons/fa6";
import {FaXmark} from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = ()=>{
            if (window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.addEventListener("scroll", handleScroll)
        }
    },[])

    // Nav items
    const navItems = [
        {link: "Home", path:"/"},
        {link: "About", path:"/about"},
        {link: "Shop", path:"/shop"},
        {link: "Sell Your Book", path:"/admin/dashboard"},
        {link: "Blog", path:"/blog"},
    ]
    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-200 " : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                {/*Logo*/}
                    <Link to='/' className="text-2xl font-bold text-textColor flex items-center gap-2"><FaBook className="inline-block"/>দ্বীন</Link>

                {/*Nav items for large device*/}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({link, path}) => <Link to={path} key={path} className="uppercase cursor-pointer hover:text-textColor block text-base text-black">
                                {link}
                            </Link>)
                        }
                    </ul>

                {/*btn for lg devices*/}
                    <div className="spacex-12 hidden lg:flex items-center">
                        <button> <FaBarsStaggered className="w-5 hover:text-textColor"/>  </button>
                    </div>

                {/*menu button for the mobile devices*/}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isOpen ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered className="h-5 w-5 text-black"/>
                            }
                        </button>
                    </div>

                </div>

            {/*Nav items for sm devices*/}
                <div className={`space-y-4 px-4 mt-14 py-7 bg-green-300 ${isOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) => <Link to={path} key={path} className="uppercase cursor-pointer text-black block text-base ">
                            {link}
                        </Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
