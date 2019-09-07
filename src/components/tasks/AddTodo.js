import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    state = {
        addTitle: ''
    }
    
    onType = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.addTitle);
        this.setState({ addTitle: '' });
    }

    clearText = (e) => {
        this.setState({ addTitle: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{height: '4rem'}}>
                <div className="input-field">
                    <input id="addTitle" type="search" value={this.state.addTitle} onChange={this.onType} required />
                    <label className="label-icon" htmlFor="add">
                        <i className="material-icons">add</i>
                    </label>
                    <i className="material-icons" onClick={this.clearText}>close</i>
                </div>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
