import React from 'react'
import Rx from 'rx'

import Log from './log.js'

var refLog = null;


class ce extends React.Component{

  constructor(){
    super()
    this.state = {
      show:false
    }
  }

  componentDidMount(){
    const stream =  Rx.Observable.fromEvent(document.body,'keyup');
    stream.buffer(()=>stream.debounce(250)).map((list)=>{
      return {
        length:list.length,
        data:list.map((e)=>e.keyCode)
    }})
    .filter((x)=>x.length==8)
    .filter((x)=>x.data.toString() == "38,38,40,40,37,37,39,39")
    .subscribe((e)=>{
      refLog.info('log',"trigger up->up->down->down->left->left->right->right event!")
      this.setState({show:true})
    })
  }

  render(){

    return(

      <div style={{width:"100%"}}>
        <h3>需求场景：监听按键事件上上下下左左右右，触发隐藏区域显示事件</h3>
        <input type="button" value="Clear Log" onClick={()=>{refLog.clear();this.setState({show:false})}}/>

        {this.state.show?<div style={{marginTop:"20px"}}>这是一个隐藏功能！！！</div>:null}

        <div style={{width:"100%"}}>
          <Log ref={(ref)=>{refLog = ref}} />
        </div>


      </div>
    )
  }
}


export default ce
