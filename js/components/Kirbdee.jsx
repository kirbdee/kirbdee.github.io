import React from 'react';
import ReactDom from 'react-dom';
import Container from './Container.jsx';
import SocialMenu from './SocialMenu.jsx';
import Landing from './Landing.jsx';

export default class Kirbdee extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false};
    }

    handleClick(e){
        this.setState({ open: !this.state.open});
    }

    render() {
        return (
            <Container>
                <SocialMenu/>
                <Landing pos="left" onClick={this.handleClick.bind(this)} open={this.state.open}/>
                <Landing pos="right" onClick={this.handleClick.bind(this)} open={this.state.open}/>
            </Container>
        )
    }
}