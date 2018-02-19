import React from "react";
import EventEmitter from "./helpers/event_emitter";
import "./app.style.css";

const app = {}
app.container = props => <App {...props} />
const App = ({children}) =>
            <app>
                {children}
            </app>

export default class AppContainer extends React.Component {
    eventEmitter = new EventEmitter()

    getChildContext = () => {
        return {eventEmitter: this.eventEmitter}
    }

    render() {
        return app.container({
            children: this.props.children
        })
    }
}

AppContainer.childContextTypes = {
    eventEmitter: React.PropTypes.object
}
