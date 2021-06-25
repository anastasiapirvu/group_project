//ALL DONE HERE! :)
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Local from '../helper/Local';


function AuthenticationRoute(props) {
    // Redirect to /login if the  user is anonymous
    // let userId = Local.getUserId();
    // if (!userId) {
    //     return <Redirect to="/login" />;
    // }

    // Render <Route> containing child component(s)
    return (
        <Route exact path={props.path}>
            {props.children}
        </Route>
    );
}

export default AuthenticationRoute;