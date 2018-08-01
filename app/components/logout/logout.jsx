import React from "react";
import { Container, Image} from 'semantic-ui-react'
import LogoutHeader from './logoutHeader.jsx'
import ButtonLogin from './loginButton.jsx'

const Logout = () => (
    <Container>
        <LogoutHeader/>
        <ButtonLogin/>
    </Container>
)
export default Logout