import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle(){
        return{
            color: this.props.todo.completed ? '#848484' : '#5ba6ab',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render(){
        
        const {id, title, completed} = this.props.todo;

        return (
            <div>
                <a className="collection-item">
                    <label>
                        <input type="checkbox" className="filled-in" onChange={this.props.markComplete.bind(this, id)} defaultChecked={completed}/>
                        <span style={this.getStyle()}>{title}</span>
                    </label>
                    <i onClick={this.props.delTodo.bind(this,id)} className="material-icons" style={{float:'right', color: '#848484', cursor: 'pointer'}}>delete</i>
                </a>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;