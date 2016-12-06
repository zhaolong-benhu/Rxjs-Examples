import React from 'react'

import AddTodo from './AddTodo.js'

import TodoList from './TodoList.js'

// import Footer from './Footer.js'
import * as Actions from './actions.js'
import * as Reducers from './reducer.js'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      visibleTodos:[]
    }
  }

  componentDidMount(){
    Reducers.subject.subscribe((state)=>{
      this.setState({visibleTodos:state})
    })
  }

  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            Actions.addTodo(text)
          } />
        <TodoList
          todos={this.state.visibleTodos}
          onTodoClick={index =>
            Actions.completeTodo(index)
          } />

      </div>
    )
  }
}
