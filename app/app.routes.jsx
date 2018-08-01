import React from "react";
import {Switch, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router-dom'
import Navigation from './components/_core/navigation/navigation'
import Home from "./components/home/home";
import Light from "./components/light/light";
import Radiator from './components/radiator/radiator'
import Garage from './components/garage/garage'
import Settings from './components/settings/settings'
import Logout from './components/logout/logout.jsx'

const NotFound = () => (
    <h1>404 - Page not found</h1>
)

export default class Routes extends React.Component {
    render() {
        return (
            <div>
        <Navigation/>
            <Switch style={{backgroundColor: '#E6E6FA'}}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/licht' component={Light}/>
                <Route exact path='/heizung' component={Radiator}/>
                <Route exact path='/garage' component={Garage}/>
                <Route exact path='/einstellungen' component={Settings}/>
                <Route exact path='/abmelden' component={Logout}/>
                <Route path='*' component={NotFound}/>
            </Switch>
            </div>
        )
    }
}

