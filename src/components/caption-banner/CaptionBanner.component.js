import React, { Component } from 'react';
import './caption-banner.component.scss';

import CloseIcon from '@material-ui/icons/Close';


export default class CaptionBanner extends Component {

    constructor() {
        super();
        this.state = {
            quoteStrong: 'Be counted',
            quoteLight: 'Speak out. Be heard.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum felis ac dui efficitur condimentum. Nullam in dignissim augue. Curabitur a dui nec velit ultricies molestie. Ut suscipit libero quis egestas vehicula.',
            show: true
        }
    }

    handleClose(e) {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })

        console.log(e)
    }

    render() {

        if (!this.state.show) {
            return (
                <div style={{'margin': '20px 0'}}></div>
            )
        }
        
        return (
            <div className="container caption-banner-container">
                <span className="strong-quote">
                    <span>{this.state.quoteLight}</span>
                    <strong>{this.state.quoteStrong}</strong>
                </span>

                <div className="description">
                    <p>
                        {this.state.description}
                    </p>
                </div>

                <div className="close" onClick={(event) => this.handleClose(event)}>
                    <CloseIcon />
                </div>
            </div>
        )
        

    }

}
