import React from "react";
import {Segment, Header, Container, Grid,} from 'semantic-ui-react'



const LogoutHeader = () => (
    <Container>
        <Segment
            style={{padding: '1em 0em', backgroundColor: '#FFF'}}
            vertical >
        <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <Header textAlign='center'> Sie sind abgemeldet</Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </Container>
)
export default LogoutHeader
