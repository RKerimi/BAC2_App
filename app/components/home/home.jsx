import React from "react";
import ImgSmartHome from '../img/imgSmartHome'
//import Footer from "../_core/footer"
import {Segment, Header, Container, Grid} from 'semantic-ui-react'

const Home = () => (
    <Container>
        <Segment

            style={{ padding: '1em 0em', backgroundColor: '#FFF'}}
            vertical >
        <Grid divided='vertically'>
            <Grid.Row columns={3}>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>
                    <Header
                        as='h1'
                        content='Smart Home'
                        style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
                    />
                </Grid.Column>
                <Grid.Column>
                    <ImgSmartHome/>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        </Segment>
    </Container>
)
export default Home
