import React from 'react';
import Drumpad from './Drumpad'
import './DrumMachine.css';
import EightZeroEightDrumKit from './drumkits/808 Extended/808ExtendedDrumKit';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            <div id="drum-machine">
                <h2>Drumming Machine World</h2>
                <div className="grid-container">
                    <Drumpad className="grid-item-one" text="Q" audioPath={EightZeroEightDrumKit[0]} />
                    <Drumpad className="grid-item-two" text="W" audioPath={EightZeroEightDrumKit[1]} />
                    <Drumpad className="grid-item-three" text="E" audioPath={EightZeroEightDrumKit[2]}/>

                    <Drumpad className="grid-item-four" text="A" audioPath={EightZeroEightDrumKit[3]} />
                    <Drumpad className="grid-item-five" text="S" audioPath={EightZeroEightDrumKit[4]} />
                    <Drumpad className="grid-item-six" text="D" audioPath={EightZeroEightDrumKit[5]} />

                    <Drumpad className="grid-item-seven" text="Z" audioPath={EightZeroEightDrumKit[6]} />
                    <Drumpad className="grid-item-eight" text="X" audioPath={EightZeroEightDrumKit[7]} />
                    <Drumpad className="grid-item-nine" text="C" audioPath={EightZeroEightDrumKit[8]} />
                </div>
            </div>
         );
    }
}

export default DrumMachine;