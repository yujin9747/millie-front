import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./SignIn";
import Intro from "./Intro";
import Today from "./today/Today";
import * as React from "react";

export default function Router() {
    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/today">
                    <Today />
                </Route>
                <Route exact path="/login">
                    <SignIn />
                </Route>
                <Route exact path="/">
                    <Intro />
                </Route>
            </Switch>
        </BrowserRouter>
    </>;
}