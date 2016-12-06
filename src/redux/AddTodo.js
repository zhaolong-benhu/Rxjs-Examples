import React from 'react'

import Rx from 'rx'

export default class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  componentDidMount(){
    Rx.Observable.fromEvent(this.refs.input,'keyup')
    .map(x=>x.keyCode)
    .subscribe(x=>{
      x==13?this.handleClick():null;
    })
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}
