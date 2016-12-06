import React from 'react'

import Log from './log.js'

import Rx from 'rx'

var refLog = null;


class mc extends React.Component{

  componentDidMount(){
      var stream = Rx.Observable.fromEvent(this.refs.btn, 'click');

      stream.buffer(()=>stream.debounce(250))
      .map((list)=>list.length)
      .filter(x => x>=4)
      .subscribe(e => {
         refLog.info('log',`btn clicked ${e} times!`)
       });

  }

  render(){
    return(
      <div style={{width:"100%"}}>
        <h3>需求场景：将四次以上点击的事件作为一个事件，抖动时延为250ms</h3>
        <input type="submit" style={{background:"lightBlue",outline:"none"}} value="Run" ref="btn" />
        <input type="button" value="Clear Log" onClick={()=>refLog.clear()}/>

        <div style={{width:"100%"}}>
          <Log ref={(ref)=>{refLog = ref}} />
        </div>
      </div>
      )
  }
}


export default mc
