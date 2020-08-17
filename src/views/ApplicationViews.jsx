import React from 'react';
import {Route} from "react-router-dom";
import Routes from '../routes/Routes';

const ApplicationViews = (props) =>{
    let index = 1;
    const routes = Routes.map(({path, component})=> <Route key={index++}{...props} exact path={path} component={component}/>)
    return (
        <>
        {routes}
        </>
    )
}
export default ApplicationViews;