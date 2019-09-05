import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return (
            <div className="collection">
                {
                    this.props.todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>
                    ))
                }
            </div>
        ); 
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;