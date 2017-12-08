import React, { Component } from 'react';
import { render } from 'react-dom';

import 'styles/style.css';
import keenImg from '../assets/keen.png';

export default class Hello extends Component {
    render(){
        return(
            <div>
                Hello World From  React.

                <img src={keenImg} alt="Keen Img" />
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));

