import React from 'react';
import axios from 'axios';

export default class Quote extends React.Component {
    state = {
        quote: '',
        author: ''
    }
    
    getQuote() {
        const quoteRestUrl = 'https://quotes.rest/qod?category=inspire';
        axios.get(quoteRestUrl)
            .then(response => {
                this.setState({ 
                    quote: response.data.contents.quotes[0].quote,
                    author:response.data.contents.quotes[0].author
                });
            })
            .catch(e => console.log('error: '+ e));
    
        //return quote;
    }

    render(){
    return(
        <React.Fragment>
            <div className="card" onLoad={this.getQuote.bind(this)}>
                <div className="card-image">
                    <img style={{borderRadius: "10px"}} src="https://source.unsplash.com/random/500x200/?nature,pink"/>
                    <span className="card-title"><h3>Let's do something good today!</h3></span>
                    <a id="addFab" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <blockquote style={{margin: '5px 10px'}}>
                        {this.state.quote}
                    </blockquote>
                    <p style={{marginLeft: '1.5rem'}}>{`-${this.state.author}`}</p>
                    <p style={{fontSize: '10px', float: 'right'}}>Daily quotes powered by <a href="https://quotes.rest">quotes.rest</a></p>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

