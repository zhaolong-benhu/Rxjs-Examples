import React from 'react'

import Rx from 'rx'

import Log from './log.js'

const get_data1 = url => new Promise((resolve,reject) => setTimeout(()=>resolve({url:url,data:100}),1500))
const get_data2 = url => new Promise((resolve,reject) => setTimeout(()=>resolve({url:url,data:200}),500))

const get_data3 = (data1,data2) => new Promise((resolve,reject) => setTimeout(()=>resolve({url:data1.url+data2.url,data:data1.data+data2.data}),1000))

var refLog = null;



const run = ()=>{


    refLog.info('log',"Run Begin!!!");

    const data1_subuject = new Rx.Subject()
    const data2_subject = new Rx.Subject()

    Rx.Observable.when(data1_subuject.and(data2_subject).thenDo((data1,data2)=>{return {data1:data1,data2:data2}}))
    .flatMap(data=>{
        var s = new Rx.Subject()
        get_data3(data.data1 , data.data2).then((data3)=>{
          refLog.info('warn',"data3 request received");
          s.onNext(data3);
          s.onCompleted();
        })
        refLog.info('log',"data3 request send!");

        return s
    }).subscribe((data)=>{
      refLog.info('log',"run finished!!!----" + data.url + '---' + data.data);
    })

    get_data1("Hello").then((e) => {refLog.info('warn',"data1 request received!");data1_subuject.onNext(e)});
    refLog.info('log',"data1 request send!");
    get_data2("World").then((e) => {refLog.info('warn',"data2 request received!");data2_subject.onNext(e)});
    refLog.info('log',"data2 request send!");

    refLog.info('warn',"run pending!!!");


}

const md = (props)=>{
  return(
    <div style={{width:"100%"}}>
      <h3>需求场景：客户端需要向服务器获取三次数据，数据1需要1500ms,数据2需要500ms,数据3依赖数据1和数据2.</h3>
      <input type="submit" style={{background:"lightBlue",outline:"none"}} value="Run" onClick={()=>run()}/>
      <input type="button" value="Clear Log" onClick={()=>refLog.clear()}/>

      <div style={{width:"100%"}}>
        <Log ref={(ref)=>{refLog = ref}} />
      </div>
    </div>
  )
}

export default md;
