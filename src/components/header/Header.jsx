import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Routes from "../../routes/Routes";
import './header.css';
const LOGO = require('../../assets/images/EW_Logo.png')
const Header = (props) => {
    let index = 0;
    const links = Routes.map(({ path, name }) => {
        const setActive = (e) =>{
            let btns = document.querySelectorAll('button')
            for(let i = 0; i < btns.length; i++){
                btns[i].classList = btns[i].name === e.target.name ? `p-1 larger-font active` : 'p-1 larger-font'
            }
        }
        return (
            <>
              { path === props.location.pathname ? <Link    to={path}><button key={++index} onClick={setActive} name={name} className="p-1 larger-font active">{name}</button></Link> : <Link    to={path}><button key={++index} onClick={setActive} name={name} className="p-1 larger-font">{name}</button></Link>}
            </>
        )
    })
   


  
    return (
        <> 
        <div className="justify-content-center">
                    <div className="logo">
                        <img src={LOGO} alt="early warning radio tower army green with tan background"/>
                    </div>
                </div>
            <header className="justify-content-center">
                <div className="justify-links">
                    {links}
                </div>
            </header>
        </>
    )
}
export default withRouter(Header);