import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page-styles/about.css';
const ATROCITY_IMG = require('../assets/images/Atrocity_Logo.png');
const DISCORD_IMG = require('../assets/images/Discord.png');
const FAIR_PLAY_ALLIANCE_IMG = require('../assets/images/Fair_Play_Alliance.png')
const PRINCE_IMG = require('../assets/images/Prince.png');
const ACF_IMG = require('../assets/images/ArmchairFinancial.jpg')
const About = () => {
  return (
    <div className="container contents pt-5 pb-5">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <h1 className="">WHAT WE DO</h1>
          <p>
            Early Warning Entertainment is a game development studio and military advisory
            for the Entertainment and Defence Industries.
              <br />
            <br />
              Early Warning Entertainment is Veteran operated. Members of Early Warning
              include both currently serving and retired Canadian Armed Forces &amp;
              US Military.
            </p>
          <p>CFHQ NOVA SCOTIA, CANADA</p> <br />
          <p>
            Working on our debut title: <br /> Atrocity: Field of Hands <br />{" "}
            <a
              href="https://onedrive.live.com/?id=96DED0AB7D6FDB30%2116943&cid=96DED0AB7D6FDB30"
              target="_blank"
            >
              {" "}
                Press Kit
             
        
          <img
            src={ATROCITY_IMG}
            title="Atrocity: Field of Hands"
            alt="Atrocity: Field of Hands"
          />
         </a>
            </p> 
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <h1>EWS IN THE NEWS</h1>
          <li>
            <a
              href="https://www.thestar.com/halifax/2018/05/05/gaming-company-helping-veterans-adjust-to-post-military-life.html"
              target="_blank"
            >
              Gaming company helping veterans adjust to post-military life
              </a>
          </li>
          <li>
            <a
              href="http://www.capebretonpost.com/business/video-game-company-relocates-to-sydney-207058/"
              target="_blank"
            >
              Early Warning Entertainment is currently developing first title
              </a>
          </li>
          <br /> <br />
          <a href="https://fairplayalliance.org/" target="_blank">
            <img
              className="image-sizing"
              src={FAIR_PLAY_ALLIANCE_IMG}
              style={{ width: "35%" }}
              title="The Fair Play Alliance"
              alt="The Fair Play Alliance"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <h1>CONTACT US</h1>
          <a href="mailto:commandpost@coldfurnace.com">
            <p>commandpost@coldfurnace.com</p></a>
          <p>
            {" "}
            <a href="https://discord.gg/SgSd83q" target="_blank">
              <img
                className="image-sizing"
                src={DISCORD_IMG}
                style={{ width: "25%", height: '25%' }}
                alt="Early Warning Discord"
              />
            </a>
          </p>


          <br />
          <h1>PARTNERS</h1>
          <p>
            <a href="http://armchairfinancial.ca/" target="_blank">
              <img
                className="image-sizing"
                src={ACF_IMG}
                title="Buy Veteran"
                alt="Buy Veteran"
              /></a>
          </p>
          <a href="http://buyveteran.ca/" target="_blank">
            <img
              src={PRINCE_IMG}
              className="image-sizing"
              title="Buy Veteran"
              alt="Buy Veteran"
            />
          </a>
        </div>
      </div>
    </div>

  )
}
export default About;