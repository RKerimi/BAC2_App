import React from "react";
import HomeHeader from "./header"
import { Container, Image} from 'semantic-ui-react'

const Home = () => (
    <Container>
        <HomeHeader/>
        <Image src='../static/img/dashboard-mockup.jpg' centered/>
    </Container>
)
export default Home