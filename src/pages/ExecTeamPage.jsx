import React from 'react';
import "./page-styles/advisory.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const LORI_IMG = require('../assets/images/Lori.jpg')
const JEFF_IMG = require('../assets/images/Jeff.jpg')
const MARK_IMG = require('../assets/images/Mark.jpg')

const ExecTeamPage = () =>{
    return (
        <div className="container team text-center pt-5 pb-5">
            <h1 className="pb-5 pt-2">Cold Furnace Executives</h1>
  <div className="row">
    
    <div className="team_members text-center align-center">
      <div className="row text-center">
      
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center "> 
        <img
          className="exec-img mb-3"
            style={{height: "200px", width: "200px", borderRadius: "50%" }}
            src={LORI_IMG}
            alt="Lori Shepherd"
          />
          <h1>Lori Shepherd, Chief Executive Officer</h1>
          <p>
            Lori builds games. Lori also builds teams from the ground up,
            ensuring the effectiveness of the team through collaboration. Lori
            is Chief Executive Officer, Creative Director, &amp; Civil-Military
            Liaison of Cold Furnace Studios. Sitting on the Executive Board of
            Directors with the Interactive Society of Nova Scotia, Lori
            advocates for the game industry in Atlantic Canada.
          </p>
          <p>
            Lori creates military based games, combining her security training,
            and creativity into realistic and engrossing experiences.
            Encompassing criminal elements, espionage, law enforcement,
            cyberwarfare, intelligence, and tactics.
          </p>
          <p>
            Lori’s audience, in the security forum, have included police
            agencies, government, military and defense, legal professionals,
            technology sectors, consultants, and private investigators.
          </p>
          <p>
            International law enforcement and security organizations have worked
            with her in understanding and preparing for virtual world culture
            and threats to games associated with crime in online gaming. Lori
            has contributed to the INTERPOL Working Party on Information
            Technology Crime, regarding Gaming and Virtual Worlds.
          </p>
          <p>
            {" "}
            She has worked in the AAA industry, specializing in game security;
            including Anti-Cheating, Anti-Piracy, and Secure Distribution.
            Before joining the game industry in 2007, Lori was employed by the
            Government of Canada, and responsible for system design and security
            architecture.
          </p>
        </div>
      </div>
    </div>
    <div className="team_members">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pb-5">
            <img
             className="exec-img mb-3"
            style={{ height: "200px", width: "200px", borderRadius: "50%"  }}
            src={JEFF_IMG}
            alt="Jeff Shaver, Chief Financial Officer"
          />
          <h1>Jeff Shaver, Chief Financial Officer</h1>
          <p>
            Jeff 'The Hammer' Shaver, Chief Financial Officer (CFO), brings with
            him over 30 years of experience navigating government bureaucracy in
            the areas of operations, legislation, strategic planning, corporate
            reporting, and internal audit. He holds a Bachelor of Commerce
            degree with High Honours from Carleton University. Jeff enjoys, in
            no particular order, beer, wine, pizza, Haida art, Inuit sculpture,
            modern and classic automobiles, winding road trips through the U.S.
            southwest, southern BBQ, Elvis weddings, and Caribbean beaches.
          </p>
          <p>
            In his spare time, he is also the owner of the personal investment
            blog{" "}
            <a href="http://armchairfinancial.ca/" target="_blank">Armchair Financial Canada</a>
            .{" "}
          </p>
          <p />
        </div>
      </div>
    </div>
    <div className="team_members">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pb-5"> 
           <img
            className="exec-img mb-3"
            style={{height: "200px", width: "200px", borderRadius: "50%"  }}
            src={MARK_IMG}
            alt="Mark Wheeler"
          />
          <h1>Mark Wheeler, Director Emeritus</h1>
          <p>
            Mark Wheeler, Chief Military Advisor, of Cold Furnace Studios, is a
            retired member of the Canadian Armed Forces, with over 25 years of
            service.
          </p>
          <p>
            With his background in military leadership, as well as combat
            experience, Mark has thrown himself out of a few airplanes
            #Airborne. Mark has been deployed in several international
            conflicts, including multiple tours to Afghanistan as well as the
            Balkans.
          </p>
        </div>
      </div>
    </div>
    <h1>
      <a
        style={{ color: "red" }}
        href="https://vetscanada.org/"
        target="_blank"
      >
        VETS Canada
      </a>{" "}
      is the corporate charity of Cold Furnace Studios.
    </h1>
  </div>
</div>

    )
}
export default ExecTeamPage;