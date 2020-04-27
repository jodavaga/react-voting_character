import React, { Component } from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

import './CardVote.scss';


class CardVote extends Component {

    getPercentages = (likes, dislikes): Array => {
        const totalVotes = likes + dislikes;

        const likePercentage = (likes*100)/totalVotes;
        const dislikePercentage = (dislikes*100)/totalVotes;

        const percentageArray = [likePercentage, dislikePercentage];

        return percentageArray;
    }

    voteSelected = () => {
        
    }

    roundPercentageToDisplay = ( num ): Number => {
        const rounded = Math.round(num * 10) / 10;
        return rounded;
    }
    
    render() {

        const imgUrl = require('../../assets/images/'+this.props.item.img+'.jpg');

        const backgroundStyle = {
            backgroundImage: "url("+ imgUrl +")"
        }

        const _likes = this.getPercentages(this.props.item.likes, this.props.item.dislikes)[0];
        const _dislikes = this.getPercentages(this.props.item.likes, this.props.item.dislikes)[1];

        return (
            <div className="card card-vote" style={backgroundStyle}>
                <div className="card-container">
                    <h1>{this.props.item.character}?</h1>
                    <small><strong>{this.props.item.date}</strong> in {this.props.item.category}</small>
                    <p>{this.props.item.description}</p>
                    <div className="button-vote">
                        <button 
                            className="btn btn-like selected"
                            onClick={(event) => this.props.handleVote(this.props.item.id, event.currentTarget.classList[1])}
                        >
                            <ThumbUpIcon />
                        </button>

                        <button 
                            className="btn btn-dislike"
                            onClick={(event) => this.props.handleVote(this.props.item.id, event.currentTarget.classList[1])}
                        >
                            <ThumbDownAltIcon />
                        </button>

                        <button className="btn btn-outline">
                            Vote now
                        </button>

                    </div>
                </div>
                <div className="votes-buttons">
                    <button className="btn btn-like" style={{'width': _likes+'%'}}>
                        <span className="btn-vote">
                            <ThumbUpIcon />
                            <span>{this.roundPercentageToDisplay(_likes)}%</span>
                        </span>
                    </button>
                    <button className="btn btn-dislike" style={{'width': _dislikes+'%'}}>
                        <span className="btn-vote">
                            <span>{this.roundPercentageToDisplay(_dislikes)}%</span>
                            <ThumbDownAltIcon />
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default CardVote;