import React from 'react';
import logo from '../assets/images/logo.svg';

import './Main.scss';

import Header from '../components/header/Header';
import Votes from '../components/votes/Votes';

class Main extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <Votes />
                </div>
            </div>
        )
    }
}

export default Main;
