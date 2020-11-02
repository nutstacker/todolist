import React,{Component} from "react";

class ToDo extends Component{
  render(){
    return(
        <div className='card'>
          <h1>{this.props.title}</h1>
          <h2>{this.props.data}</h2>
            
      </div>
    )
  }
}
export default ToDo;
