import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import {Container, Header, Segment, Image, List} from "semantic-ui-react";


const Team = () => (
    <div>
        <Segment
            inverted
            textAlign='center'
            style={{minHeight: 700, padding: '1em 0em', background: 'black url(https://static.pexels.com/photos/398532/pexels-photo-398532.jpeg) center fixed no-repeat', backgroundSize: '100% auto'}}
            vertical
        >
            <Navigation />
            <Container text>
                <Header
                    as='h1'
                    content='Team'
                    inverted
                    style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)'}}
                />
                <Header
                    as='h2'
                    content='Josef Ressel Center for User-Centric Smart Grid Privacy, Security and Control'
                    inverted
                    style={{fontSize: '1.7em', fontWeight: 'normal', textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)'}}
                />
            </Container>
        </Segment>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Container text>
                <Header as='h3' style={{fontSize: '2em'}}>Team</Header>
                <p>We are a team of researchers working at the Salzburg University of Applied Sciences.</p>
                <Image src="https://i.imgur.com/ZEwOZaL.jpg"/>
                <p style={{fontSize: '1.33em'}}>
                    FREDOSAR is developed by the team from the Josef Ressel Center for User-Centric Smart Grid Privacy, Security and Control. Our goal is
                    to implement a comprehensive trust framework in the smart grid user domain. In collaboration with our company partners, this framework
                    is integrated in real-world test pilots. By integrating the methods developed at the Josef Ressel Center with strive for trustful interactions between
                    users and distributed systems.
                </p>
                <Header as='h4' style={{fontSize: '1.3em'}}>FREDOSAR Members</Header>
                <List>
                    <List.Item>
                        <Image avatar src='https://i.imgur.com/SI6YhKl.jpg'/>
                        <List.Content>
                            <List.Header as='a' href="mailto:christian.neureiter@fh-salzburg.ac.at">Christian Neureiter</List.Header>
                            <List.Description>Product owner and model based systems engineer</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://i.imgur.com/VTIfL0R.jpg'/>
                        <List.Content>
                            <List.Header as='a' href="mailto:norbert.egger@fh-salzburg.ac.at">Norbert Egger</List.Header>
                            <List.Description>Project leader, Scrum master and developer</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://i.imgur.com/l9qthw2.jpg'/>
                        <List.Content>
                            <List.Header as='a' href="mailto:michael.fischinger@fh-salzburg.ac.at">Micheal Fischinger</List.Header>
                            <List.Description>Security expert and developer.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://i.imgur.com/TpZlReq.jpg'/>
                        <List.Content>
                            <List.Header as='a' href="mailto:dieter.draxler@fh-salzburg.ac.at">Dieter Draxler</List.Header>
                            <List.Description>Model Architect and Android developer.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://i.imgur.com/nmIO6JN.jpg'/>
                        <List.Content>
                            <List.Header as='a' href="mailto:laltenhuber.its-m2016@fh-salzburg.ac.at">Lukas Altenhuber</List.Header>
                            <List.Description>Core developer</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
                <Header as='h4' style={{fontSize: '1.3em'}}>FREDOSAR Contributors</Header>
                <List>
                    <List.Item>
                        <List.Content>
                            <List.Header>Michael Renoth</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
                <p>For more information please visit our official website: <a href="https://www.en-trust.at/" title="en-trust.at">en-trust.at</a></p>
            </Container>
        </Segment>
        <Footer />
    </div>
)
export default Team
