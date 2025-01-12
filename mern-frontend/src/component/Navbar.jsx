import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { FaBook } from "react-icons/fa";
import {FaBarsStaggered} from "react-icons/fa6";

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
        <header>
            <nav>
                <div>
                {/*Logo*/}
                    <Link to='/' className="text-2xl font-bold text-textColor flex items-center gap-2"><FaBook className="inline-block"/>Books</Link>

                {/*Nav items for large device*/}
                    <ul className="md:flex space-x-12">
                        {
                            navItems.map(({link, path}) => <Link to={path} key={path} className="uppercase cursor-pointer hover:text-textColor block text-base text-black">
                                {link}
                            </Link>)
                        }
                    </ul>

                {/*btn for lg devices*/}
                    <div className="spacex-12 hidden lg:flex items-center">
                        <button> <FaBarsStaggered className="w-5"/>  </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
