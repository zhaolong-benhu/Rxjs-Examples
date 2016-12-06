import React from 'react'

const Todo = (props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
        cursor: props.completed ? 'default' : 'pointer'
      }}>
      {props.text}
    </li>
  )
}


const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) =>
        <Todo {...todo}
              key={index}
              onClick={() => props.onTodoClick(index)} />
      )}
    </ul>
  )
}

export default TodoList
