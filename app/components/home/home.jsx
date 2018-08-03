import React from "react";
import { Container, Image} from 'semantic-ui-react'
import HomeHeader from "./header"
import BtnPushNotification from "./btnPushNotification"

const Home = () => (
    <Container>
        <button className="enable_notifications ui primary  button" >Subscribe</button>
        <HomeHeader/>
        <Image src='../static/img/dashboard-mockup.jpg' centered/>
    </Container>
)
export default Home