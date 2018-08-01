import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom'
import {Header, Container, Link} from 'semantic-ui-react';
import RadiatorGraph from './radiatorGraph'
import RadiatorRoom from './tempRoom'


function ClimateDisplay(props) {
    return (
        <Container>
            <RadiatorRoom
                temp={props.temp}
                pressure={props.pressure}
                temp_soll={props.temp_soll}
                humidity={props.humidity}
                country={props.country}/>
        </Container>
    )
}

export default class Radiator extends React.Component {
    constructor() {
        super();

        //api_url = 'http://samples.openweathermap.org/data/2.5/weather?appid=6384f6940e1b5dd2173efe3106363fa4&units=metric';


        this.state = {
            temp: [],
            pressure: [],
            temp_soll: [],
            humidity: [],
            country: []
        };
    }
    componentDidMount() {
        //toDO Authentication
        fetch('../src/data/weather.json')
            .then(res => {
                return res.json();
            }).then(res => {
            console.dir(res)
            this.setState({
                temp: res.main.temp,
                pressure: res.main.pressure,
                temp_soll: res.main.temp_soll,
                humidity: res.main.humidity
            });
            console.log(this.state.temp + "temp")
            console.log(this.state.pressure + "pressure")
            console.log(this.state.temp_soll + "temp_soll")
            console.log(this.state.humidity + "humidity")

        }).catch(error => console.error('Error:', error))

        fetch('../src/data/weather.json')
            .then(res => {
                return res.json();
                // handle network error
            }).then(res => {
            this.setState({
                country: res.sys.country,
            });
            console.log(this.state.country + "country")

        }).catch(error => console.error('Error:', error))

    }

    render() {
        let {temp, pressure, temp_soll, humidity, country} = this.state

        return (
            <ClimateDisplay temp={temp}
                            pressure={pressure}
                            temp_soll={temp_soll}
                            humidity={humidity}
                            country={country}/>


        )
    }
}