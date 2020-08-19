import React from 'react';
import "./page-styles/games.css"
const ATROCITY_IMG = require('../assets/images/Atrocity_Logo.png');
const ATROCITY_CONFIDENTIAL = require('../assets/images/Atrocity_FactSheet.png')

const GamesPage = () =>{
    return (
        <div className=" align-content-center ">
            <img src={ATROCITY_IMG} alt="atrocity field of hands logo, atrocity text with spear"/>
            <div>
            <img src={ATROCITY_CONFIDENTIAL} className="w-50  center-afoh" alt="atrocity field of hands logo, atrocity text with spear"/>
            </div>
            <p className="center-text">Press Kit</p>
        </div>
    )
}
export default GamesPage;