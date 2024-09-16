import React from 'react';
import './Footer.css';
import logo from '../assets/1.png'
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twit from '../assets/twitter.png'
import yt from '../assets/youtube.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src={logo} alt="" />
                <p>Discover our story and passion behind our luxurious cosmetics.</p>
            </div>

            <div className="footer-container">
                <div className="footer-section">
                    <h4>SHOP</h4>
                    <ul>
                        <li><a href="/Makeup">Makeup</a></li>
                        <li><a href="/Skin">Skin</a></li>
                        <li><a href="/Body">Body</a></li>
                        <li><a href="/Hair">Hair</a></li>
                        <li><a href="/Fragrance">Fragrance</a></li>
                        <li><a href="/Offers">Offers</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/search">Ask Us</a></li>
                        <li><a href="/login">My Account</a></li>
                        <li><a href="/cart">My Orders</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>POLICY</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Cancelation Policy</li>
                        <li>Shiping Policy</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>HELP</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>Locate Store</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <div className='subscribe'>
                        <h4>STAY UPDATED!</h4>
                        <p>Get the latest updates, offers and promotions every week.</p>
                        <input type="text" id='email' placeholder='Enter your EmailID'/>
                        <button>Subscribe</button>
                    </div>
                    <h5>Follow Us On:</h5>
                    <div className="social-media">
                        <a href="https://facebook.com"><img src={fb} /></a>
                        <a href="https://instagram.com"><img src={insta} /></a>
                        <a href="https://twitter.com"><img src={twit} /></a>
                        <a href="https://youtube.com"><img src={yt} /></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cosmetics Brand. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
