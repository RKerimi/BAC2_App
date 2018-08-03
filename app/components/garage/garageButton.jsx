import React from 'react'
import { Button, Grid , Segment} from 'semantic-ui-react'

const GarageButton = () => (
    <Grid columns='equal'>
        <Grid.Row>
            <Grid.Column>
                <Button positive size="huge">Öffnen</Button>
            </Grid.Column>
            <Grid.Column>
               <Button negative>Schliessen</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default GarageButton