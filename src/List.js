import React from "react";
import cross from './assets/icon-cross.svg'


export default function List(props) {

const [checkedList, setCheckedList] = React.useState(false);


function isListChecked() {
    setCheckedList((previousState) =>  previousState === false ? true : false)
     if(checkedList) {
         props.handleCount()
     } else {
         props.handleClick()
     }
    
}

    return (
        <div className="todo-list-wrapper">
             
             <div className="list">
                
                 <div className="text">
                     <div onClick={isListChecked}
                     className={`${checkedList ? "checked-circle" : "unchecked-circle"}`}></div>
                     
                     
                     <div onClick={isListChecked} 
                     className={`${checkedList ? "checked-list" : "unchecked-list"}`}
                     >{props.value}</div>

                     </div>
                     <div className="delete">
                         <img src={cross} alt="delete"/>
                     </div>
                     
                    </div>

             </div>
    )
}