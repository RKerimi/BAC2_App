import React, {Component} from "react";
import { browserHistory } from 'react-router'
import {Button} from 'semantic-ui-react'


class ButtonLogin extends Component {
    handleBack(){
        console.log("Hallo");
    }

    render() {
        const ButtonLogin = () => <Button color='green' fluid>Anmelden</Button>

        return (
        <ButtonLogin onClick={this.handleBack}/>
        )
    }
}


export default ButtonLogin