import Rx from 'rx'
import * as Keys from './keys.js'
import * as Actions from './actions.js'

export const subject = new Rx.ReplaySubject(1)

var state = []

const addTodo = (text) => {
  state = [
        ...state,
        {
          text: text,
          completed: false
        }
      ]
  subject.onNext(state)
}

const completeTodo = (index) =>{
  state = [
    ...state.slice(0, index),
    Object.assign({}, state[index], {
      completed: true
    }),
    ...state.slice(index + 1)
  ]
  subject.onNext(state)
}



Actions.subject.subscribe(action=>{
  switch (action.type) {
    case Keys.ADD_TODO:
      addTodo(action.text)
      break;
    case Keys.COMPLETE_TODO:
      completeTodo(action.index)
      break;
    default:

  }
})
