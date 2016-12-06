import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory ,IndexRoute ,Link} from 'react-router'

import MultipleData from './multipleData.js'
import MultipleClick from './multipleClick.js'
import MultipleServer from './multipleServer.js'
import ComplicatedKeyEvents from './complicatedKeyEvents.js'
import BaiduSuggestions from './getBaiduSuggestions.js'
import Description from './description.js'
import ReduxApp from './redux/App.js'
import Base from './base.js'
import Xianzhi from './Xianzhi.js'


const App =  (props)=>{
  return(
    <div style={{display:"flex",flexDirection:"row",width:"100%",height:"100%"}}>
      <div style={{display:"flex",width:"20%",flexDirection:"column",height:"100%"}} className="links">
          <Link to="/">PPT</Link>
          <Link to="/Base">Base</Link>
          <Link to="/MultipleData">MultipleData</Link>
          <Link to="/MultipleClick">MultipleClick</Link>
          <Link to="/MultipleServer">MultipleServer</Link>
          <Link to="/ComplicatedKeyEvents">ComplicatedKeyEvents</Link>
          <Link to="/BaiduSuggestions">BaiduSuggestions</Link>
          <Link to="/ReduxApp">Redux Emulation Example</Link>
          <Link to="/Xianzhi">9first.com</Link>
      </div>
      <div style={{display:"flex",flexGrow:1}}>{props.children}</div>
     </div>
  )
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Description} />
        <Route path="Base" component={Base} />
        <Route path="MultipleData" component={MultipleData} />
        <Route path="MultipleClick" component={MultipleClick} />
        <Route path="MultipleServer" component={MultipleServer} />
        <Route path="ComplicatedKeyEvents" component={ComplicatedKeyEvents} />
        <Route path="BaiduSuggestions" component={BaiduSuggestions} />
        <Route path="ReduxApp" component={ReduxApp} />
        <Route path="Xianzhi" component={Xianzhi} />
    </Route>
  </Router>
  ,document.getElementById('app')
)
