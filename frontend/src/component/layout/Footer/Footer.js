import React from 'react'
import "./Footer.css"
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
    return (
        

        <footer>
            <div className="row">
                <div className="col">
                    <img src="2.png" alt="logo" className='logo' />
                    <p>Stay Connected to Shopkart for more amazing deals. Don't miss the oportunity and grab as manny deals as possible</p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p>Pari Chowk.</p>
                    <p>Gautam Buddha University, Greater Noida.</p>
                    <p>Uttar Pradesh, PIN 201312 India.</p>
                    <p className="email-id">akashpratapsingh878@gmail.com</p>
                    <h4>+91 - 8126621154</h4>
                </div>
                <div className="col">
                    <h3>Links<div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newletter<div className="underline"><span></span></div></h3>
                    <form action="">
                        <MailOutlineOutlinedIcon className='mailicon'/>
                        <input type="emial" placeholder='Enter Your email id'/>
                        <button type="submit"><ArrowForwardIcon/></button>
                    </form>
                    <div className="social-icons">
                        <FacebookOutlinedIcon/>
                        <TwitterIcon/>
                        <WhatsAppIcon/>
                        <PinterestIcon/>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">Shopkart © 2025 - All Rights Reserved</p>
        </footer>

    );
}

export default Footer