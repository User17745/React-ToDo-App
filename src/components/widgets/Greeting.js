import React, { Component } from 'react'
import { returnStatement } from '@babel/types';

export default class Greeting extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3 style={{marginTop: '0'}}>{this.getGreeting()}</h3>
                    <p>Here are your pending tasks.</p>
                </div>
            </div>
        )
    }

    getGreeting() {
        const date = new Date();
        let hour = date.getHours();

        if(hour > 5 && hour < 12)
            return "Good Morning!";
        else
            return "Hello";
        // switch(hour){
        //     case hour == 6 : {return "Good Morning!"};
        //     break;
        //     case hour == 12 : return "It's Noon!";
        //     break;
        //     case hour > 12 && hour < 17 : return "It's sunny afternoon!";
        //     break;
        //     case hour > 17 && hour < 20 : return "What a lovely evening we have today!";
        //     break;
        //     case hour > 20  && hour < 5 : return "Working late are we?";
        //     break;
        //     default: return "Oops.." + hour;
        // }
    }
}
