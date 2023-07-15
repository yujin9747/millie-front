import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./SignUp";
import Intro from "./Intro";
import Today from "./today/Today";
import * as React from "react";

export default function Router() {
    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/today/:email/:nickname">
                    <Today />
                </Route>
                <Route exact path="/signUp">
                    <SignUp />
                </Route>
                <Route exact path="/">
                    <Intro />
                </Route>
            </Switch>
        </BrowserRouter>
    </>;
}