import React from "react";


export default function List(props) {
    return (
        <div className="todo-list-wrapper">
             

             <div className="list">
                 {/* first list */}
                 <div className="text">
                     <div className="list-cricle"></div>
                     <div className="list-text">{props.value}</div>
                     </div>
                     <div className="delete"></div>
                     <hr></hr>
                    </div>

                
                
                    {/* <div className="list-states">
                //     <div className="itemCount">3 itmes left</div>
                //     <div className="clear">Clear Completed</div>
                // </div> */}

             </div>
    )
}