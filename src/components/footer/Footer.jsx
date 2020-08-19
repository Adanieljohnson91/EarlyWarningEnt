import React from 'react';
import './footer.css'
const FB_LOGO = require('../../assets/images/FB_LOGO.png');
const TWITTER_LOGO = require('../../assets/images/TWITTER_LOGO.png');
const INSTA_LOGO = require('../../assets/images/INSTAGRAM.png');
const Footer = () => {

    return (
        <>
            <div className="background_color center pt-5 ">
                <h1 className="p-3">© 2020 Early Warning Entertainment</h1>
            </div>
            <div className="row2 center">
               <a href="https://www.facebook.com/earlywarningent/" target="_blank"> <img className="image" src={FB_LOGO} alt="link to early warning entertainment facebook page" /></a>
              <a href="https://www.instagram.com/earlywarningent/?hl=en" target="_blank"> <img className="image" src={INSTA_LOGO} alt="link to early warning entertainment facebook page" /></a> 
              <a href="https://twitter.com/earlywarningent" target="_blank"> <img className="image" src={TWITTER_LOGO} alt="link to early warning entertainment facebook page" /></a> 
            </div>
        </>
    )
}
export default Footer;