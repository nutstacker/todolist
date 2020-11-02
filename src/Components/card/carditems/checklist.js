import React,{Component} from "react";
import CheckListItem from "./checkboxitems/checklistitem";


class CheckList extends Component{
  render(){
    return(
    <div className='card'>

        <h1>{this.props.title}</h1>
        <CheckListItem data={this.props.data} ></CheckListItem>
    </div>
    )
  }
}
export default CheckList;
