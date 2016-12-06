import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const A = ()=>{
  return(
    <div className="page">
      <h1>Reactive Extensions</h1>
      <h2>
        github repo1:<a target="_blank" href="https://github.com/Reactive-Extensions/RxJS" >https://github.com/Reactive-Extensions/RxJS</a>
      </h2>
      <h2>
        github repo2:<a target="_blank" href="https://github.com/ReactiveX/rxjs" >https://github.com/ReactiveX/rxjs</a>
      </h2>
    </div>
  )
}

const B = ()=>{
  return(
    <div className="page">
      <h1>FRP(Functional Reactive Programming)</h1>
    </div>
  )
}

const C = ()=>{
  return(
    <div className="page">
      <img src="/AIimQ8C.jpg" />
    </div>
  )
}

const D1= ()=>{
  return(
    <div className="page">
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.AsyncSubject.png" />
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.AsyncSubject.e.png" />
    </div>
  )
}

const D2= ()=>{
  return(
    <div className="page">
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.BehaviorSubject.png" />
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.BehaviorSubject.e.png" />
    </div>
  )
}

const D3= ()=>{
  return(
    <div className="page">
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.PublishSubject.png" />
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.PublishSubject.e.png" />
    </div>
  )
}
const D4= ()=>{
  return(
    <div className="page">
      <img style={{maxWidth:"80%",maxHeight:"40%"}} src="http://reactivex.io/documentation/operators/images/S.ReplaySubject.png" />
    </div>
  )
}

const F = ()=>{
  return(
    <div className="page">
      <h1>The Observer pattern done right</h1>
      <h3 style={{width:"70%"}}>
        ReactiveX is a combination of the best ideas from the Observer pattern,
        the Iterator pattern, and functional programming
      </h3>
    </div>
  )
}

const E = ()=>{
  return(
    <div className="page">
        <h1>Observable</h1>
        <img src="/legend.png" style={{maxWidth:"80%",maxHeight:"40%"}} />
    </div>
  )
}

export default class Description extends  React.Component{

  constructor(){
    super()
    this.state={
      current:0
    }
    this.index = 8;
  }

  componentDidMount(){
    const stream =  Rx.Observable.fromEvent(this.refs.div,'click')
    stream.buffer(()=>stream.debounce(250))
    .map((list)=>list.length)
    .filter(x => x>=2)
    .subscribe(x => {
       if(x==2){
         this.state.current<this.index?this.setState({current:this.state.current+1}):null
       }
        else {
          this.state.current>0?this.setState({current:this.state.current-1}):null
        }
     });
  }

  render(){
    return(
      <div className="description" style={{height:"100%",width:"100%",display:"flex"}}
        ref="div">

        <ReactCSSTransitionGroup
          component="div"
          style={{display:"flex",height:"100%",width:"100%"}}
          transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
         {(()=>{
           switch (this.state.current) {
             case 0:
                return <A key="a"/>
               break;
              case 1:
                return <B key="b" />
              case 2:
                return <C key="c" />
              case 3:
                return <F key="f" />
              case 4:
                return <E key="e" />
              case 5:
                return <D1 key="d1" />
              case 6:
                return <D2 key="d2" />
              case 7:
                return <D3 key="d3" />
              case 8:
                return <D4 key="d4" />
             default:

           }
         })()}
       </ReactCSSTransitionGroup>
      </div>
    )
  }
}
