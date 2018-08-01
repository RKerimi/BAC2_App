import React from "react";
import { Container, Image} from 'semantic-ui-react'
import SettingsHeader from './settingsHeader.jsx'

const Settings = () => (
    <Container>
        <SettingsHeader/>
        <Image src='../static/img/settings.jpg' centered/>
    </Container>
)
export default Settings