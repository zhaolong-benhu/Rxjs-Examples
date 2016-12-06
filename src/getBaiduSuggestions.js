import React from 'react'

import Rx from 'rx'

import Log from './log.js'

import $ from "jquery";

var refLog = null;

class bs extends React.Component{

  componentDidMount(){

    Rx.Observable.fromEvent(this.refs.input,'keyup')
    .map((e)=>e.target.value)
    .filter(elem => elem.length<15)
    .debounce(500)
    .distinctUntilChanged()
    .flatMapLatest((keyword)=>
      $.ajax({
            url: 'http://unionsug.baidu.com/su',
            dataType: 'jsonp',
            jsonp:'cb',
            data: {
                wd: keyword
            }
        }).promise()
    )
    .subscribe(data=>{
      refLog.clear();
      Rx.Observable.from(data.s)
      .subscribe(item=>{
        refLog.info('log',item)
      })
    })


  }

  render(){
    return(
      <div style={{width:"100%"}}>
        <h3>需求场景：输入事件触发网络请求</h3>
        <input type="input" ref="input" />
        <input type="button" value="Clear Log" onClick={()=>{refLog.clear();this.setState({show:false})}}/>

        <div style={{width:"100%"}}>
          <Log ref={(ref)=>{refLog = ref}} />
        </div>


      </div>
    )
  }
}

export default bs;
