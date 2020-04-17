import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onClick = this.onClick.bind(this);
    }

    onClick (event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.onClick} value={this.props.text}>{this.props.text}</button>
        );
    }
}

export default Drumpad;