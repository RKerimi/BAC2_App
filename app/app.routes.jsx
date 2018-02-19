import React from "react";
import Home from "./components/home/home";
import Team from "./components/team/team"
import {Switch, Route} from 'react-router-dom'

const NotFound = () => (
    <h1>404 - Page not found</h1>
)

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/team' component={Team}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        )
    }
}

