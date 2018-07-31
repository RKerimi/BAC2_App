import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import {Header, Segment, Container, Divider} from "semantic-ui-react";
import LightButton from '../light/lightButton.jsx'
import LightImage from '../light/lightImage'

export default class AccordionExampleFluid extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return <Container>

            <Segment
                textAlign='center'
                style={{minHeight: 700, padding: '1em 0em', backgroundColor: '#F1F5FF'}}
                vertical>
                <Header
                    as='h1'
                    content='Lichtsystem'
                    style={{fontSize: '4em', fontWeight: 'normal', marginBottom: '0.5em'}}

                />
                <LightImage />
                <Divider/>
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginTop: '0.5em'}}>
                        <Icon name='dropdown' />
                        Wohnzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} style={{backgroundColor: '#F1F5FF'}}>

                        <LightButton />
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Schlafzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} style={{backgroundColor: '#F1F5FF'}}>
                        <LightButton/>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Kinderzimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} style={{backgroundColor: '#F1F5FF'}}>
                        <LightButton/>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Badezimmer
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} style={{backgroundColor: '#F1F5FF'}}>
                        <LightButton/>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        WC
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} style={{backgroundColor: '#F1F5FF'}}>
                        <LightButton/>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick} style={{fontSize: '2em', fontWeight: 'normal', marginBottom: 0}}>
                        <Icon name='dropdown'/>
                        Vorraum
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} style={{backgroundColor: '#F1F5FF'}}>
                        <LightButton/>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        </Container>
    }
}