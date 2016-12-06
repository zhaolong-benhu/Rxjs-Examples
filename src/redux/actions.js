import * as Keys from './keys.js'
import Rx from 'rx'

export const subject = new Rx.ReplaySubject(1)

export const addTodo = (text) => subject.onNext({type:Keys.ADD_TODO,text})

export const completeTodo = (index) => subject.onNext({type:Keys.COMPLETE_TODO,index})

export const setVisibilityFilter = (filter) => subject.onNext({type:Keys.SET_VISIBILITY_FILTER,filter})
