import React from "react";
import {Link} from "react-router-dom"
import {Container, Button, Icon, Header} from "semantic-ui-react";
import LightButton from '../helpers/lightButton'

const Masthead = () => (
        <Container text>
            <Header
                as='h1'
                content='Smart Home Light Button'
                inverted
                style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
            />
            <Header
                as='h2'
                content='Here is another text'
                inverted
                style={{fontSize: '1.7em', fontWeight: 'normal'}}
            />
            <LightButton/>
            <br/>

        </Container>
)
export default Masthead
