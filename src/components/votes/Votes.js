import React, {Component} from 'react';

import CardVote from '../card-vote/CardVote';
import cardsData from '../../assets/data/cardsData';

import './Votes.scss';

class Votes extends Component {
    constructor() {
        super();
        this.state = {
            cards: cardsData
        }
    }

    // Get updted data from local storage if exist
    componentWillMount() {
        if (localStorage.getItem('data')) {
            console.log('data already exist');

            const actualData = JSON.parse(localStorage.getItem('data'));
            this.setState(prevState => {
                prevState.cards = actualData
            });
        }
    }

    // update data on localstorage
    componentDidUpdate() {
        const dataJson = JSON.stringify(this.state.cards);
        console.warn('Updated!', dataJson);
        localStorage.setItem('data', dataJson);

    }

    // Add and edit votes count depending on the selected reaction.
    handleVote = (id, item) => {
        this.setState(prevState => {
            const updatedCards = prevState.cards.map(card => {
                // voted on LIKE
                if ( card.id == id && item === 'btn-like') {
                    card.likes = card.likes + 1;
                    // console.log('voted on:', id);
                }
                if ( card.id == id && item === 'btn-dislike') {
                    card.dislikes = card.dislikes + 1;
                }
                return card;
            })
            return {
                cards: updatedCards
            }
        })
    }
    
    render() {

        const cards = this.state.cards.map(item => <CardVote 
                key={item.id} 
                item={item}
                handleVote={this.handleVote}
            />);

        return (
            <div>
                <div className="section-title">Votes</div>
                <div className="votes-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Votes;