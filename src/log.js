import React from 'react'

class Log extends React.Component{

  constructor(){
    super()
    this.state={
      items:[]
    }
  }

  info(level,description){
    var items = this.state.items;
    items.push({level:level,info:description});
    this.setState({items:items})

  }

  clear(){
    this.setState({items:[]})
  }

  render(){

      const style ={
        "error":{color:"red"},
        "log":{color:"white"},
        "warn":{color:"yellow"}
      }
      return(
        <div style={{background:"grey",display:"flex",flexDirection:"column",marginTop:"30px",width:"100%"}}>
          {this.state.items.map((item,index)=>{
            return(
              <div style={Object.assign({},{display:"flex",height:"28px",flexDirection:"row"},style[item.level])} key={index}>
                <div>{item.level}:</div>
                <div>{item.info}</div>
              </div>
            )
          })}
        </div>
      )
  }


}

export default Log
