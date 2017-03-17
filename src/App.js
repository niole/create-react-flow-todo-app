//@flow
import React, { Component } from 'react';
import './App.css';
import type {
  TodoCreator,
  DateFormatter,
  Todo,
} from './Types.js';

class App extends Component {
  state: {
    todos: Todo[];
  };

  input: any;

  formatDate: DateFormatter;

  createNewTodo:  TodoCreator;

  constructor() {
    super();

    this.state = {
      todos: this.getDefaultTodoList(),
    };

    (this: any).addTodo = this.addTodo.bind(this);
    this.input = null;
  }

  getDefaultTodoList(): Todo[] {
    return [];
  }

  formatDate(date: Date): string {
    const month = date.getMonth()+1; //gets 0 indexed month
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  getTodos() {
    const {
      todos,
    } = this.state;

    return todos.map(todo => (
        <li>
          <div>{ this.formatDate(todo.created) }</div>
          <div>{ todo.content }</div>
        </li>
      )
    );
  }

  createNewTodo(content: string): Todo {
    return {
      done: false,
      content,
      created: new Date(),
    };
  }

  addTodo() {
    const {
      todos,
    } = this.state;

    const content = this.input.value;
    this.input.value = "";

    this.setState({
      todos: [this.createNewTodo(content)].concat(todos),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What Todo on { this.formatDate(new Date()) }</h2>
        </div>
        <input placeholder="add todo" ref={ ref => this.input = ref } />
        <button onClick={ this.addTodo }>add Todo</button>
        <ul className="App-intro">
          { this.getTodos() }
        </ul>
      </div>
    );
  }
}

export default App;
