import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class LightButton extends Component {
    constructor(props) {
        super(props);
        this.state = {active: false,
                       count:0
                    };

        this.handleClick = this.handleClick.bind(this);
    }
    count() {
        this.setState({
            count: this.state.count + 1
        });
    }


    handleClick(e) {
        this.setState(getOn => ({active: !getOn.active}));
        if(this.state.active==false){
        this.count(e);}


    }

    render() {
        const { active, count } = this.state
        return (
            <div>
            <Button toggle active={active} onClick={this.handleClick}>
                {this.state.active ? 'Light ON' : 'Light OFF'}
                {console.dir(active)}
                {console.log(count)}
            </Button><br/>
                {count}
            </div>
                                )
    }
}

export default LightButton
