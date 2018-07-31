import React, { Component } from 'react';
import {Link, browserHistory} from "react-router-dom"
import {Header, Container} from "semantic-ui-react";


export default class Radiator extends React.Component {
    constructor() {
        super();

        //api_url = 'http://samples.openweathermap.org/data/2.5/weather?appid=6384f6940e1b5dd2173efe3106363fa4&units=metric';


        this.state = {
            temp: [],
            pressure:[],
            temp_max:[],
            humidity:[]
        };


    }

    componentDidMount() {

        fetch('../src/data/weather.json')
            .then(res =>  {return res.json();
                // handle network error
            }).then(res => {
            console.dir(res)
            this.setState({temp: res.main.temp,
                pressure:res.main.pressure,
                temp_max:res.main.temp_max,
                humidity:res.main.humidity
             });
            console.log(this.state.temp + "temp")
            console.log(this.state.pressure  + "pressure")
            console.log(this.state.temp_max  +  "temp_max")
            console.log(this.state.humidity  +  "temp_min")

        }).catch(error => console.error('Error:', error))
    }
    render(){
        let{temp, pressure, temp_max} = this.state
        let{escription} = this.state

        return (
            <div>
                {this.state.temp}<br/>
                {this.state.pressure}<br/>
                {this.state.temp_max}<br/>
                {this.state.humidity}
            </div>
        )}
}