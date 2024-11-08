import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container">
            <header className={active ? "scrolled" : "transparent"}>
                <div className="logo">
                    <img 
                        src={active ? "/Assets/logo-2.png" : "/Assets/logo-1.png"} 
                        alt="Logo" 
                        className="logo-image" 
                    />
                </div>
                <nav>
                    <ul>
                        <li><a href="#"><Link to="/">Home</Link></a></li>
                        <li><a href="#"><Link to="/bookclub">BOOKCLUB</Link></a></li>
                        <li><a href="#"><Link to="/recommended">RECOMMENDED</Link></a></li>
                        <li><a href="#"><Link to="/blog">Blog</Link></a></li>
                        <li><a href="#"><Link to="/media">MEDIA</Link></a></li>
                        <li><a href="#"><Link to="/about">ABOUT</Link></a></li>
                        <li><a href="#" className='join'><Link to="/join">JOIN</Link></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#" className='lens'><i class="fa-solid fa-magnifying-glass"></i></a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
