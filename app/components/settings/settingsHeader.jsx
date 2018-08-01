import React from "react";
import {Segment, Header, Container, Grid,} from 'semantic-ui-react'



const SettingsHeader = () => (
    <Container>
        <Segment
            style={{ padding: '1em 0em', backgroundColor: '#FFF'}}
            vertical >
        <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <Header
                        textAlign='center'
                        as='h1'
                        content='Einstellungen'
                        style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </Container>
)
export default SettingsHeader
