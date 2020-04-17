import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button className={this.props.className}>{this.props.text}</button>
        );
    }
}

export default Drumpad;