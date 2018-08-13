import React, { Component } from 'react';
import {  Container, Link, Divider, Header} from 'semantic-ui-react';
import { render } from 'react-dom';
import MapWithAMarker from './garageMaps';
import GarageButton from './garageButton.jsx'

//Quelle:https://stackblitz.com/edit/react-zqry2u?file=index.js

export default class Garage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentLatLng: {
                lat: 0,
                lng: 0
            },
            Marker: false
        }
    }

    CurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(() => ({
                        currentLatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        Marker: true
                    }))
                }
            )
        } else {
            error => console.log(error)
        }
    }


    componentDidMount() {
        this.CurrentLocation()
    }

    render() {
        return (
            <Container>
                <Header>Garagensystem</Header>
                <MapWithAMarker
                    Marker={this.state.Marker}
                    currentLocation={this.state.currentLatLng} />
                <Divider/>
                <GarageButton/>

            </Container>
        );
    }
}



