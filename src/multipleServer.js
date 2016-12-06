import React from 'react'

import Log from './log.js'

import Rx from 'rx'

var refLog = null;

const get_data1 = () => new Promise((resolve,reject) => setTimeout(()=>resolve("message from server A"),Math.random() * 100))
const get_data2 = () => new Promise((resolve,reject) => setTimeout(()=>resolve("message from server B"),Math.random()*100))

const run =()=>{
  Rx.Observable.merge(Rx.Observable.fromPromise(get_data1),Rx.Observable.fromPromise(get_data2)).take(1)
  .subscribe(x=>{
    refLog.info('log',x)
  })
}

const ms = ()=>{
      return (
        <div style={{width:"100%"}}>
          <h3>需求场景：有两个API服务器,为了效率问题，同时向两个服务器请求数据，但只要最先返回的数据</h3>
          <input type="submit" style={{background:"lightBlue",outline:"none"}} value="Run" onClick={run} />
          <input type="button" value="Clear Log" onClick={()=>refLog.clear()}/>

          <div style={{width:"100%"}}>
            <Log ref={(ref)=>{refLog = ref}} />
          </div>
        </div>
    )
}


export default ms
