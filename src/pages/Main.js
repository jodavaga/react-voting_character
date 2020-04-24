import React from 'react';
import logo from '../assets/logo.svg';

import './Main.scss';

import Header from '../components/header/Header';

class Main extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
                </div>

            </div>
        )
    }
}

export default Main;
