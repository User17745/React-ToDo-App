import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import uuid from 'uuid';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do homework.',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Learn React.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take Notes.',
        completed: false
      },
    ]
  }

  //Mark a task complete.
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id)
        todo.completed = !todo.completed
        return todo;
    })});
  }

  //Delete a task.
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo =>
      todo.id !== id)]});
  }

  //Add a new task.
  addTodo = (addTitle) => {
    const newTask = {
      id: uuid.v4(),
      title: addTitle,
      complete: false
    }

    this.setState({ todos: [...this.state.todos, newTask]});
  }

  render(){
    return (
      <Router>
        <div>
          <Header addTodo={this.addTodo} />
          <div className="row">
            <div className="col s12 m6">
              <Route exact path="/" render={props => (
                <React.Fragment>

                          <Todos todos={ this.state.todos } delTodo={this.delTodo} markComplete={this.markComplete}/>
                      
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;