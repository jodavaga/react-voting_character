import React from 'react';

import logo from '../../assets/images/rule-logo.png';
import SearchIcon from '@material-ui/icons/Search';

import CardBanner from '../card-banner/CardBanner';

import './Header.scss'

class Header extends React.Component {
    render() {
        return(
            <div className="header-container">
                <header>
                    <div className="logo"><img src={logo} alt=""/></div>
                    <div>
                        <ul className="main-menu">
                            <li><a href="">Past Trials</a></li>
                            <li><a href="">How It Works</a></li>
                            <li><a href="">Log In/Sign Up</a></li>
                            <li><SearchIcon fontSize="large" /> </li>
                        </ul>
                    </div>
                </header>

                <section className="container">
                    <CardBanner />
                </section>
            </div>
        )
    }
}

export default Header;