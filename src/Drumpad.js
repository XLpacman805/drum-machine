import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onClick = this.onClick.bind(this);
    }

    onClick (event) {
        let audio = new Audio(this.props.audioPath);
        audio.play();
    }

    render() {
        return (
            <button id={this.props.text} className={[this.props.className]} onClick={this.onClick} value={this.props.text}>{this.props.text.toUpperCase()}</button>
        );
    }
}

export default Drumpad;