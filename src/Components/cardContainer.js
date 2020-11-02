import React,{Component} from "react";
import CheckList from "./card/carditems/checklist";
import ToDo from './card/carditems/todo';


const values = [
  {
      type : 'todo',
      title : 'first',
      data : 'first todo'
  },
  {
      type : 'checklist',
      title : 'second',
      data : [
          {
              id : '1',
              completed : false,
              content : 'first checklist'
          },
          {
              id : '2',
              completed : true,
              content : 'second checklist'
          }
      ]
  }
];

class CardContainer extends Component{
  render(){
    return(
      <div className="card-container">
      {values.map((item) => {
        return item.type === "checklist" ? (
          <CheckList key={item.id} title={item.title} data={item.data}>
          </CheckList>
        ) : (
          <ToDo key={item.id} title={item.title} data={item.data}>
          </ToDo>
        );
      })}
    </div>
    )
  }
}
export default CardContainer;