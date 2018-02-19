import React from "react";
import Navigation from "../navigation/navigation"
import Masthead from "../masthead/masthead"
import Intro from "../intro/intro"
import Footer from "../footer/footer"
import {Segment} from 'semantic-ui-react'

const Home = () => (
    <div>
        <Segment
            inverted
            textAlign='center'
            style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#2B4798'}}
            vertical
        >
            <Navigation />
            <Masthead/>
        </Segment>
        <Intro/>
        <Footer/>
    </div>

)
export default Home
