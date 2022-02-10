import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

function App() {


  return (
    <div className="app">
    <Todo />
    </div>
  );
}

export default App;


/*

{list.length &&  
  <List 
           value={newList} 
           key={index} 
           handleChecked={isComplete}
           handleCount={addToItemCount}
           handleClick={substractItemCount}
           listItemsCount={listItemsCount}
           />
                 <div className="list-states">
                    <div className="itemCount">{listItemsCount} itmes left</div>
                    <div className="clear" onClick={clearCompletedItems}>Clear Completed</div>
                 </div> }
*/
