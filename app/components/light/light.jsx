import React from "react";
import {Link} from "react-router-dom"
import {Header, Segment} from "semantic-ui-react";
import LightButton from '../light/lightButton.jsx'


const Light = () => (
    <Segment
        textAlign='center'
        style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#FFFFF0'}}
        vertical>
        <Header
            as='h1'
            content='Lichtsystem'
            style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
        />
        <Header
            as='h2'
            content='Lichttaster'
            style={{fontSize: '1.7em', fontWeight: 'normal'}}
        />
        <LightButton/>
    </Segment>

)
export default Light