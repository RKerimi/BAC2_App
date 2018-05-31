import React from "react";
import {Link} from "react-router-dom"
import {Header, Segment} from "semantic-ui-react";


const Radiator = () => (
    <Segment
        textAlign='center'
        style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#8A2BE2'}}
        vertical>
        <Header
            as='h1'
            content='Heizsystem'
            style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
        />
    </Segment>

)
export default Radiator