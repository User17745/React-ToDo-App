import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import uuid from 'uuid';
import axios from 'axios';
import Header from './components/layout/Header';
import Todos from './components/tasks/Todos';
import About from './components/pages/About';
import Quote from './components/widgets/Quote';
import Greeting from './components/widgets/Greeting';

class App extends Component {
  state = {
    todos: [
      //Hard-coded values

      // {
      //   id: uuid.v4(),
      //   title: 'Take out trash.',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Do homework.',
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Learn React.',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Take Notes.',
      //   completed: false
      // },
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
    //Hard-coded Delete from state
    // this.setState({todos: [...this.state.todos.filter(todo =>
    //   todo.id !== id)]});

      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;

      axios.delete(apiUrl)
        .then(this.setState({todos: [...this.state.todos.filter(todo =>
          todo.id !== id)]}));
  }

  //Add a new task.
  addTodo = (addTitle) => {
    
    //Hard-coded Sate Update

    // const newTask = {
    //   id: uuid.v4(),
    //   title: addTitle,
    //   complete: false
    // }

    const newTask = {
      title: addTitle,
      completed: false
    }

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    
    axios.post(apiUrl, newTask)
      .then(response => this.setState({ todos: [...this.state.todos, response.data]}));
  }

  render(){
    return (
      <Router>
        <div>
          <Header addTodo={this.addTodo} />
          <div className="row">
            <div className="col s12 m8">
              <Route exact path="/" render={props => (
                <React.Fragment>

                          <Todos todos={ this.state.todos } delTodo={this.delTodo} markComplete={this.markComplete}/>
                      
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
            <div className="col s12 m4">
              <Greeting />
              <Quote />
            </div>
          </div>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    axios.get(apiUrl)
      .then(response => this.setState( {todos: response.data}));
  }
}

export default App;