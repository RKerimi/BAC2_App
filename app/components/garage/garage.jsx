import React, { Component } from 'react'
import {Icon } from 'semantic-ui-react'
import {Header, Segment, Container, Divider} from "semantic-ui-react";
import GarageButton from './garageButton.jsx'
import GarageImage from './garageImage'

export default class Garage extends Component {

    render() {

        return <Container>
            <Segment
                textAlign='center'
                style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#F1F5FF'}}
                vertical>
                <Header
                    as='h1'
                    content='Garage'
                    style={{fontSize: '4em', fontWeight: 'normal', marginBottom: '0.5em'}}
                />
                <GarageImage />
                <Divider/>
                <GarageButton/>
            </Segment>
        </Container>
    }
}