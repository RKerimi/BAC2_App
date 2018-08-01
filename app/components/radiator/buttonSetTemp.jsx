import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonSetTemp = () => (
    <Button.Group size='huge'>
        <Button>-</Button>
        <Button.Or />
        <Button positive>+</Button>
    </Button.Group>
)

export default ButtonSetTemp