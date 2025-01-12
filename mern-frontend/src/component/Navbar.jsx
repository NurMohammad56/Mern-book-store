import React, {useEffect, useState} from 'react';

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
    return (
        <div>Navbar</div>
    );
};

export default Navbar;
