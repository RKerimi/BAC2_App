import React from "react";
import {Switch, Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router-dom'
import Navigation from './components/_core/navigation/navigation'
import Home from "./components/home/home";
import Light from "./components/light/light";
import Radiator from './components/radiator/radiator'

const NotFound = () => (
    <h1>404 - Page not found</h1>
)

export default class Routes extends React.Component {
    render() {
        return (
            <div>
        <Navigation/>
            <Switch >
                <Route exact path='/' component={Home}/>
                <Route exact path='/licht' component={Light}/>
                <Route exact path='/heizung' component={Radiator}/>
                <Route path='*' component={NotFound}/>
            </Switch>
            </div>
        )
    }
}

