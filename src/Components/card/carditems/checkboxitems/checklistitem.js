import React,{Component} from "react";

// class CheckListItem extends Component{
// //   render(){

// //     // return <>{JSON.stringify(this.props.data)}</>;
// //     return (
// //     {props.data.map(item) => 
// //       {JSON.stringify(item)}
// //       // <input key={item.id} type="checkbox" 
// //       // checked={item.data.completed || false } value={item.content || ''} /> 
    
// //     }
// //   )
// // }

//   render(){
//     return this.props.data.map(item => JSON.stringify(item))
//   }
// }
// export default CheckListItem;

export default function Checklist({ data }) {
  return data.map(item => (
    <div class='checklist'>
    <input type="checkbox" checked={item.completed} />
  <span>{item.content}</span>
    </div>
  )
  )
}
