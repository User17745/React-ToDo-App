import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        return (
            <div className="card time-card">
                <div className="card-content">
                    <span style={{fontSize: '2.5rem'}}><sup style={{fontSize: '1.4rem', marginRight: '.5rem'}}>It's </sup>{this.getTime().clock}</span>
                    <span><ion-icon style={{fontSize: '2rem', color: '#848484', marginLeft: '1.5rem'}} name={this.getTime().icon}></ion-icon></span>
                    <h5 style={{marginTop: '0'}}>{this.getTime().greeting}</h5>
                    <p>Here are your pending tasks.</p>
                </div>
            </div>
        )
    }

    getTime() {
        const date = new Date();
        let time = {
            clock: date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"),
            greeting: '',
            icon: ''
        }
        
        let hour = date.getHours();
        if(hour > 5 && hour < 12) {
            time.greeting = "Good Morning!"
            time.icon = 'partly-sunny';
            }
        else if(hour == 12){
            time.greeting = "It's Noon!"
            time.icon = 'sunny';
        }
        else if(hour > 12 && hour < 17){
            time.greeting = "It's sunny afternoon!"
            time.icon = 'sunny';
        }
        else if(hour > 17 && hour < 20){
            time.greeting = "What a lovely evening we have today!"
            time.icon = 'partly-sunny';
        }
        else if(hour > 20  && hour < 25){
            time.greeting = "Working late are we?"
            time.icon = 'moon';
        }
        else if(hour > 0  && hour < 5){
            time.greeting = "Why aren't you sleeping?"
            time.icon = 'moon';
        }
        else{
            time.greeting = "What time is it again?"
            time.icon = 'moon';
        }

        return time;
    }
}
