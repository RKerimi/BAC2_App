import React, {Component} from "react";
import { browserHistory } from 'react-router'
import {Container, Image} from 'semantic-ui-react'
import LogoutHeader from './logoutHeader.jsx'
import ButtonLogin from './loginButton.jsx'


class Logout extends Component {
    handleBack(){
        console.log("Hallo");
    }

    render() {


        return (
            <Container>
                <LogoutHeader/>
                <ButtonLogin onClick={(e) => this.handleBack(e)}/>
            </Container>
        )
    }
}


export default Logout