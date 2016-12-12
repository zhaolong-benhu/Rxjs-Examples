import React from 'react'

import Rx from 'rx'

import Log from './log.js'

var refLog = null;

const sleep =(ms)=> new Promise(resolve=>setTimeout(resolve,ms))


const add = ()=>{
  Rx.Observable.range(1,50).reduce((acc,v)=>{
    return acc + v;
  }).subscribe((data)=>{
    refLog.info('warn',data)
  })
}

const add2 = ()=>{
  Rx.Observable.range(1,50)
  .map((x)=>x*x)
  .reduce((acc,v)=>{
    return acc + v;
  }).subscribe((data)=>{
    refLog.info('warn',data)
  })
}

const asyncFunc = ()=>{
  Rx.Observable.startAsync(()=>sleep(5000)).subscribe(()=>{
    refLog.info('warn',"Async Operation succeeded!")
  })
}

const getMaxnum = ()=>{
  Rx.Observable.from(['0','7','-','99','-1']).map((x)=>parseInt(x))
  .filter(x => x )
  .reduce((prev,x)=>prev>x?prev:x)
  .subscribe((x)=>{
    refLog.info('warn',`max num of this array is ${x}`)
  });
}

const takeFistNElem = ()=>{
  Rx.Observable.from(['0','7','-','99','-1']).take(3)
  .reduce((acc,v)=>[...acc,v])
  .subscribe(x=>{
    refLog.info('warn',`the first 3 elem in  this array is ${x}`)
  })

}

const sliceElem  = ()=>{
  Rx.Observable.from(['0','7','-','99','-1'])
  .slice(2,4)
  .reduce((acc,v)=>[...acc,v])
  .subscribe(x=>{
    refLog.info('warn',`the 3rd and 4th elems in  this array is ${x}`)
  })
}

class Base extends React.Component{



  render(){
    return(
      <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
        <h3>需求场景：一些比较基础的用法</h3>
        <input type="button" value="累加器(1+50)" onClick={add} />
        <input type="button" value="累加器(1^2+50^2)" onClick={add2} />
        <input type="button" value="处理耗时操作" onClick={asyncFunc} />
        <input type="button" value="取最大值['0','7','-','99','-1']" onClick={getMaxnum} />
        <input type="button" value="取前三个数['0','7','-','99','-1']" onClick={takeFistNElem} />
        <input type="button" value="取其中3,4位置的数['0','7','-','99','-1']" onClick={sliceElem} />

        <input type="button" value="Clear Log" onClick={()=>{refLog.clear();this.setState({show:false})}}/>


        <div style={{width:"100%"}}>
          <Log ref={(ref)=>{refLog = ref}} />
        </div>


      </div>
    )
  }
}


export default Base
