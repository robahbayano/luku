import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer section">
            <hr/>
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">Luku</h3>
                    <p className="footer__description">New collection of shoes 2020.</p>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#featured" className="footer__link">Featured</a></li>
                        <li><a href="#women" className="footer__link">Women</a></li>
                        <li><a href="#new" className="footer__link">New</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">SUPPORT</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Product Help</a></li>
                        <li><a href="#" className="footer__link">Customer Care</a></li>
                        <li><a href="#" className="footer__link">Authorized service</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul className="footer__social">
                        <li><a href="#" className="footer__icons"><FaFacebook/></a></li>
                        <li><a href="#" className="footer__icons"><FaTwitter/></a></li>
                        <li><a href="#" className="footer__icons"><FaInstagram/></a></li>
                        <li><a href="#" className="footer__icons"><FaPinterest/></a></li>
                    </ul>
                </div>
            </div>
            <p className="footer__copy">&#169; 2021 Bayano. All rights reserved.</p>
        </div>
    )
}

export default Footer;
