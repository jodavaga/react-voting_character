import React, { Component } from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

import './CardVote.scss';


class CardVote extends Component {

    constructor() {
        super();
        this.state = {
            selected: false,
            button: '',
            inProgress: true,
            complete: false
        }
    }

    // Convert to display percentage data
    getPercentages = (likes, dislikes) => {
        const totalVotes = likes + dislikes;

        const likePercentage = (likes*100)/totalVotes;
        const dislikePercentage = (dislikes*100)/totalVotes;

        const percentageArray = [likePercentage, dislikePercentage];

        return percentageArray;
    }

    toggleVote = (event) => {
        if (this.state.inProgress && this.state.selected) {
            this.props.handleVote(this.props.item.id, this.state.button.classList[1]);
        }

        this.setState(prevState => {
            return {
                inProgress: !prevState.inProgress,
                button: '',
                selected: false
            }
        });
        
    }

    // Selecciona un boton para votar
    voteSelected = (event) => {
        const target = event.currentTarget
        
        
        this.setState(() => {
            return {
                selected: true,
                button: target,
                inProgress: true
            }
        });
        
        setTimeout(() => {
            this.addSelectedClass(target);
        }, 200);
    }

    // 
    addSelectedClass(target) {
        
        if (target.classList[1] === 'btn-like') {
             target.classList.add('selected');
             
             this.removeSelectedClass('dislike');
        } 
            
        if (target.classList[1] === 'btn-dislike') {
            target.classList.add('selected');

            this.removeSelectedClass('like');
        } 
    }

    removeSelectedClass(element) {
        const button = document.querySelectorAll(`.${element}`);
        // button.classList.remove('selected');
             const myArray = Array.from(button);
             myArray.forEach(elem => {
                 elem.classList.remove('selected');
             });
    }

    roundPercentageToDisplay = ( num ) => {
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


        const onVoteElement = <div className="buttons-onvote">
                            <button 
                                className="btn btn-like like"
                                onClick={(event) => this.voteSelected(event)}
                            >
                                <ThumbUpIcon />
                            </button>

                            <button 
                                className="btn btn-dislike dislike"
                                onClick={(event) => this.voteSelected(event)}
                            >
                                <ThumbDownAltIcon />
                            </button>

                            <button 
                                disabled={!this.state.selected}
                                onClick={this.toggleVote}
                                className="btn btn-outline">
                                Vote now
                            </button>
                        </div>;

            const voteAgainButton = <button 
                                        className="btn btn-outline"
                                        onClick={this.toggleVote}>Vote again</button>

        return (
            <div className="card card-vote" style={backgroundStyle}>
                <div className="card-container">
                    <h1>{this.props.item.character}</h1>
                    <small><strong>{this.props.item.date}</strong> in {this.props.item.category}</small>
                    <p>{this.state.inProgress ? this.props.item.description : 'Thank You for Voting!'}</p>
                    <div className="onvote-container">
                         { this.state.inProgress ? onVoteElement : voteAgainButton} 
                    </div>
                </div>
                <div className="votes-buttons">
                    <button className="btn btn-like" style={{'width': _likes+'%'}}>
                        <span className="voting-progress like">
                            <ThumbUpIcon />
                            <span>{this.roundPercentageToDisplay(_likes)}%</span>
                        </span>
                    </button>
                    <button className="btn btn-dislike" style={{'width': _dislikes+'%'}}>
                        <span className="voting-progress dislike">
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