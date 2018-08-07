import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom'
import {  Container, Link} from 'semantic-ui-react';
import RadiatorRoom from './tempRoom'


function ClimateDisplay(props) {
    return (
        <Container>
            <RadiatorRoom
                temp={props.temp}
                rain={props.rain}
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
            rain: [],
            temp_soll: [],
            humidity: [],
            country: []
        };
    }

    componentDidMount() {
        function update(data) {
            return fetch('../src/data/weather.json', {
                method: 'put',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(()=>console.log('updated!!!'))
                .catch(error => console.error('Error:', error))
        }


        //toDO Authentication
        fetch('../src/data/weather.json',{
            method:'get'
        }).then(res => {
                    return res.json();
                }).then(res => {
                    console.dir(res)
                    this.setState({
                        temp: res.main.temp,
                        rain: res.main.rain,
                        temp_soll: res.main.temp_soll,
                        humidity: res.main.humidity
                    });
                    console.log(this.state.temp + "temp")
                    console.log(this.state.rain + "rain")
                    console.log(this.state.temp_soll + "temp_soll")
                    console.log(this.state.humidity + "humidity")

                }).catch(error => console.error('Error:', error))


        fetch('../src/data/weather.json',{
            method:'get'
        }).then(res => {
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
        let {temp, rain, temp_soll, humidity, country} = this.state

        return (

            <ClimateDisplay temp={temp}
                            rain={rain}
                            temp_soll={temp_soll}
                            humidity={humidity}
                            country={country}/>


        )
    }
}