import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    });

    return (
        <div className={scrolled? "l-header scroll-header" : "l-header"} >
            <nav className="nav bd-grid">
                <div className="nav__toggle">
                    {isActive? <FaTimes onClick={toggleClass}/> : <FaBars onClick={toggleClass}/> }
                </div>

                <a href="#" className="nav__logo"><Link to="/"><img src="log.png" alt="logo"/></Link></a>

                <div className={isActive? "nav__menu show": "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link"><Link to="/">Home</Link></a></li>
                        <li className="nav__item"><a href="#featured" className="nav__link"><Link to="/mens">Men</Link></a></li>
                        <li className="nav__item"><a href="#women" className="nav__link"><Link to="/womens">Women</Link></a></li>
                        <li className="nav__item"><a href="#shop" className="nav__link"><Link to="/shop">Shop</Link></a></li>
                        <li className="nav__item"><a href="#new" className="nav__link"><Link to="/login">LogIn</Link></a></li>
                    </ul>
                </div>
                <div className="nav__shop">
                    <Link to="/cart"><AiOutlineShopping/><sup>0</sup></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;
