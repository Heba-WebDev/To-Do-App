 import React from "react";
 import cross from './assets/icon-cross.svg'
 import reactDom from "react-dom";
import Todo from "./Todo";



 export default function List(props) {

 const [checkedList, setCheckedList] = React.useState(false);


 function isListChecked() {
     setCheckedList((previousState) =>  previousState === false ? true : false)
      if(checkedList) {
         props.handleCount()
        // props.handleChecked()
     } else {
          props.handleClick()
          //props.handleChecked()
  
      }
    
 }

 function deleteThisItem(event)  {
     if(!checkedList) {
     props.handleClick()
    }
     event.preventDefault()
     event.target.parentNode.parentNode.remove()        
  }
 

    return (
        <div className="todo-list-wrapper" key={Todo.id}>
             
             <div className="list">
                
                 <div className="text">
                     <div onClick={isListChecked}
                     className={`${checkedList ? "checked-circle" : "unchecked-circle"}`}></div>
                     
                     
                     <div onClick={isListChecked} 
                     className={`${checkedList ? "checked-list" : "unchecked-list"}`}
                     >{props.value}</div>

                     </div>
                     <div className="delete" onClick={deleteThisItem}>
                         <img src={cross} alt="delete"/>
                     </div>
                     
                    </div>

              </div>

             
    )
 }



