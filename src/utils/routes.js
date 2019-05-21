import App from "../App";
import menu from './menu'
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () =>
    <App>
        <Switch>
            {
                menu && menu.map(
                    (item,key) => <Route key={key} exact path={item.url} component={item.component}/>
                )
            }
            <Route component={Home}/>

        </Switch>
    </App>;

export default AppRoutes;
