import React, { Component } from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

import './CardBanner.scss';

class CardBanner extends Component {

    constructor() {
        super();
        this.state = {
            smallCaption: "What's you opinion?",
            titleCharacter: 'Pope Francis',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices dapibus interdum. Sed nec vehicula ex. Donec eu fringilla tortor. Maecenas molestie ipsum nec nisl condimentum, eget vehicula nibh sagittis. Aliquam ac ligula lacinia, venenatis augue eu, lobortis massa.',
        }
    }
    
    render() {
        return (
            <div className="card card-banner">
                <div className="card-container">
                    <small>{this.state.smallCaption}</small>
                    <h1>{this.state.titleCharacter}?</h1>
                    <p>{this.state.description}</p>
                    <i>W</i><a href="">More information</a>
                    <div>
                        <span>What's your veredict?</span>
                    </div>
                </div>
                <div className="footer-buttons">
                    <button className="btn btn-like">
                        <ThumbUpIcon />
                    </button>
                    <button className="btn btn-dislike">
                        <ThumbDownAltIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default CardBanner;