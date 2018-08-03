import React from "react";
import { Container, Image} from 'semantic-ui-react'
import HomeHeader from "./header"
import HomeImage from './HomeImage'
import BtnPushNotification from "./btnPushNotification"

const Home = () => (
    <Container>
        <button className="enable_notifications ui primary  button" >Subscribe</button>
        <HomeHeader/>
        <HomeImage/>
    </Container>
)
export default Home