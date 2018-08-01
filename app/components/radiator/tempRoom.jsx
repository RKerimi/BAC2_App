import React, {Component} from 'react'

import {Accordion, Icon, Header, Segment, Container, Divider, Link, Grid} from "semantic-ui-react";
import ButtonSetTemp from './buttonSetTemp'
import RadiatorGraph from './radiatorGraph'


export default class RadiatorRoom extends Component {
    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }


    render() {
        const temp = this.props.temp;
        const rain = this.props.rain;
        const temp_soll = this.props.temp_soll;
        const humidity = this.props.humidity;
        const country = this.props.country;
        const {activeIndex} = this.state

        return <Container>
            <Segment
                textAlign='center'
                style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#F1F5FF'}}
                vertical>
                <Header
                    as='h1'
                    content='Raumklima'
                    style={{fontSize: '4em', fontWeight: 'normal', marginBottom: '0.5em'}}
                />
                <RadiatorGraph/>
                <Divider/>
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginTop: '0.5em'}}>
                        <Icon name='dropdown'/>
                        Wohnzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} style={{backgroundColor: '#F1F5FF'}}>
                        <Grid columns='equal'>
                            <Grid.Column>
                                <Segment><p><strong style={{fontSize: '400%'}}>{temp}</strong></p>
                                </Segment> <Icon name='home' size='huge'/><Icon name='arrow left' color='green'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment><p><strong style={{fontSize: '400%'}}>{temp_soll}</strong></p>
                                </Segment> <Icon name='home' size='huge'/><Icon name='arrow right' color='red'/>
                            </Grid.Column>
                        </Grid>
                        <Grid columns='equal'>
                            <Grid.Column>

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <ButtonSetTemp/>
                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>

                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Icon name='theme' size='huge'/> <strong style={{fontSize: '160%'}}>{rain} %</strong>
                                </Grid.Column>
                                <Grid.Column>

                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='thermometer half' size='huge'/> <strong
                                    style={{fontSize: '160%'}}>{humidity} %</strong>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                        <strong style={{fontSize: '160%'}}>{country}</strong>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Schlafzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} style={{backgroundColor: '#F1F5FF'}}>
                        <strong>Bitte Verbinden Sie sich mit ihrem Thermosat oder Wetter Modul</strong>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Kinderzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} style={{backgroundColor: '#F1F5FF'}}>
                        <strong>Bitte Verbinden Sie sich mit ihrem Thermosat oder Wetter Modul</strong>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Badezimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} style={{backgroundColor: '#F1F5FF'}}>
                        <strong>Bitte Verbinden Sie sich mit ihrem Thermosat oder Wetter Modul</strong>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        WC
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} style={{backgroundColor: '#F1F5FF'}}>
                        <strong>Bitte Verbinden Sie sich mit ihrem Thermosat oder Wetter Modul</strong>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}
                                     style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Vorraum
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} style={{backgroundColor: '#F1F5FF'}}>
                        <strong>Bitte Verbinden Sie sich mit ihrem Thermosat oder Wetter Modul</strong>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        </Container>
    }
}