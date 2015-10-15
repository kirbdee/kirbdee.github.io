import React from 'react';
import ReactDom from 'react-dom';

export default class Container extends React.Component {

    render() {
        return (
            <div className="container">
                { this.props.children }
            </div>
        )
    }
}