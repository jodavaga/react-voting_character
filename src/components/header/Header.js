import React from 'react';

import CardBanner from '../card-banner/CardBanner';

import './Header.scss'

class Header extends React.Component {
    render() {
        return(
            <div className="header-container">
                <header>
                    <div className="logo"><img src="" alt=""/></div>
                    <div>
                        <ul className="main-menu">
                            <li><a href="">Past Trials</a></li>
                            <li><a href="">How It Works</a></li>
                            <li><a href="">Log In/Sign Up</a></li>
                            <li><input type="text" placeholder="Search"/> </li>
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