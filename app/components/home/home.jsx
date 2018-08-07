import React from "react";
import { Container, Image} from 'semantic-ui-react'
import HomeHeader from "./header"
import HomeImage from './HomeImage'
import BtnPushNotification from "./btnPushNotification"

const Home = () => (
    <Container>
        <BtnPushNotification className="enable_notifications ui primary  button" >Subscribe</BtnPushNotification>
        <HomeHeader/>
        <HomeImage/>
    </Container>
)
export default Home