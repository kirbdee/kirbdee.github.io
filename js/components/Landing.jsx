import React from 'react';
import ReactDom from 'react-dom';

export default class Landing extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(e){
        this.props.onClick();
    }

    render() {
        return (
            <div className={this.props.pos + '-landing ' + (this.props.open? 'opened' : '')}>
                <div className="logo"></div>
                <div className="arrow-btn" id={this.props.pos +'-landing-btn'} onClick={this.handleClick.bind(this)}><i className={ 'fa fa-angle-' + this.props.pos }></i></div>
            </div>
        )
    }
}