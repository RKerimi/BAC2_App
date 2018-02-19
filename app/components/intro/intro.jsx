import React from "react";
import {Segment, Grid, Image, Header, List} from "semantic-ui-react";


const Intro = () => (
    <div>
    <Segment
        inverted
        textAlign='center'
        style={{ height: 300, padding: '1em 0em', background: 'url(https://i.imgur.com/2Z53yhA.jpg) center'}}
        vertical
    />
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Image src='' centered/>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Header size="huge">Sample Text</Header>
                    <p>Sample Text</p>
                </Grid.Column>
                <Grid.Column>
                    <List>
                        <List.Item icon='lock' content='Sample Text' />
                        <List.Item icon='trophy' content='Sample Text' />
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    </div>
)
export default Intro
