import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page-styles/about.css';
const ATROCITY_IMG = require('../assets/images/Atrocity_Logo.png');
const DISCORD_IMG = require('../assets/images/Discord.png');
const FAIR_PLAY_ALLIANCE_IMG = require('../assets/images/Fair_Play_Alliance.png')
const PRINCE_IMG = require('../assets/images/Prince.png');
const ACF_IMG = require('../assets/images/ArmchairFinancial.jpg')
const About = () =>{
    return (
        <div className="container contents pt-5 pb-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
            <h1 className="">WHAT WE DO</h1>
            <p>
              Cold Furnace Studios is a game development studio and military advisory
              for the Entertainment and Defence Industries.
              <br />
              <br />
              Cold Furnace Studios is Veteran operated. Members of Cold Furnace
              include both currently serving and retired Canadian Armed Forces &amp;
              US Military.
            </p>
            <p>CFHQ NOVA SCOTIA, CANADA</p> <br />
            <p>
              Working on our debut title: <br /> Atrocity: Field of Hands <br />{" "}
              <a
                href="https://drive.google.com/drive/folders/1DKGf-ISV-DOiMsOIopx0lKZlB2cubuzT?usp=sharing"
                target="_blank"
              >
                {" "}
                Press Kit
              </a>
            </p>
            <img
              src={ATROCITY_IMG}
              title="Atrocity: Field of Hands"
              alt="Atrocity: Field of Hands"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
            <h1>STUDIO NEWS</h1>
            <p>
              Cold Furnace Joins Fair Play Alliance{" "}
              <p >
                Advocating fair play and best practices in online games
              </p>
              <a href="https://coldfurnace.com/wp/cold-furnace-fpa/" target="_blank">Learn More</a>
            </p>
            <p>
              Cold Furnace Launches Military Advisory for the Entertainment Industry
              <br /> <a href="pr_advisory.html">Press Release</a>
            </p>
            <br />
            <h1>CFS IN THE NEWS</h1>
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
                Cold Furnace Studios is currently developing first title
              </a>
            </li>
            <br /> <br />
            <a
              href="https://coldfurnace.com/wp/2018/07/28/cold-furnace-fpa/"
              target="_blank"
            >
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
            <p>commandpost@coldfurnace.com</p>
            <p>
              {" "}
              <a href="https://discord.gg/SgSd83q" target="_blank">
                <img
                  className="image-sizing"
                  src={DISCORD_IMG}
                  style={{ width: "25%", height: '25%' }}
                  alt="Cold Furnace Discord"
                />
              </a>
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/coldfurnacestudios" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" />{" "}
              </a>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com/cfurnacestudios" target="_blank">
                {" "}
                <i className="fa fa-twitter" aria-hidden="true" />{" "}
              </a>
            
            </div>{" "}
        
            
            <br />
            <h1>PARTNERS</h1>
            <p>
              <a href="http://armchairfinancial.ca/">
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