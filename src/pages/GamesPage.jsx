import React from 'react';
import "./page-styles/games.css"
const ATROCITY_IMG = require('../assets/images/Atrocity_Logo.png');
const ATROCITY_CONFIDENTIAL = require('../assets/images/Atrocity_FactSheet.png')

const GamesPage = () =>{
    return (
        <div className=" align-content-center ">
            <img src={ATROCITY_IMG} alt="atrocity field of hands logo, atrocity text with spear"/>
            <div>
            <img src={ATROCITY_CONFIDENTIAL} className="w-50  center-afoh" alt="Fact sheetm Department of Media Relations Nova Scotia, Canada.
             Fact Sheet for Atrocity Field of Hands (Ep. 01) 1. Developer: Early Warning Entertainment Inc.
             2. Release Date: 2020.  3. Platforms: Playstation, PC 4. Avalability: Digital Download 5. Website www.atrocitygame.com 6. Anticipated Rating / ESRB Mature 17+ 
             7. Press Contact: intel@earlywarning.ca 8. Social: twitter.com/atrocity_game  facebook.com/atrocitygame 9. Description: Developed by military veterans, Atrocity: Field of Hands
             throws you directly into violent conflicts inspired by true events. The decisions you make in combat will have moral, ethical, and tactical consequences.
             Step into a war zone infested by the authenticity that only combat veterans can bring with real world decision points, true-to-life ballistics, and an immersive storyline. Sometimes
             it is better to be tried by tweleve than carried by six. ATROCITY FIELD OF HANDS"/>
            </div>
            <p className="center-text">Press Kit</p>
        </div>
    )
}
export default GamesPage;