import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { HomeSreen } from './HomeSreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomeSreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
