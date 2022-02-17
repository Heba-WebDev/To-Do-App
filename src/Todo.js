import React from "react";
import { ReactDOM } from "react";
import './Todo.css'
import cross from './assets/icon-cross.svg'
//import List from './List'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'


export default function Todo() {

   
    const [theme, setTheme] = React.useState('light');
    const [icon, setIcon] = React.useState(moon);
    function switchTheTheme()  {
            setTheme(previousState => previousState === 'light' ? 'dark' : 'light') 
            setIcon(previousIcon => previousIcon === moon ? sun : moon)
    }

   //Two states. first for the todo list array and second for the each item state
   const [list, setList] = React.useState([]);
   const [listItem, setListItem] = React.useState("");


   function addToTheList(event) {
   
   
    if(event.key === 'Enter' && event.target.value !== '') {
        event.preventDefault()
        const newItem = {
            id: new Date().getTime(),
            text: listItem,
            completed: false,
        }
        
        setList([...list].concat(newItem))
        SetListItemsCount(previousCount => previousCount + 1)
        setListItem("")
        
    }
   }

  

   function deleteItem(id) {
       
     const newList = [...list].filter((todo) => {
      if(todo.id === id && !todo.completed) {
        SetListItemsCount(previousCount => previousCount - 1)
      }

      return todo.id !== id
     })
    
     setList(newList)
      
   }


   const [listItemsCount, SetListItemsCount] = React.useState(0);


   function todoCompleted(id) {

   const newList = [...list].map((todo) => { if(todo.id === id) {
     if (todo.completed === false) {
         todo.completed = true;
         SetListItemsCount(previousCount => previousCount - 1)
     } else {
        todo.completed = false;
        SetListItemsCount(previousCount => previousCount + 1)
     }}
     return todo
   })
   setList(newList)
   
   }


   

   function clearCompletedItems(id) {
    const newList = [...list].filter((todo) => {
        return !todo.completed
       })
    setList(newList)  
   }
    
    return (
        <main className="todo-wrapper" data-theme={theme}>
         <nav className="navbar">
             <h1>T O D O</h1>
             <img className="icon" alt="light-dark mode icon" src={icon} onClick={switchTheTheme}/>
         </nav>

         
         <div className="todo-app">

             {/* the input field to add to the list */}
             <div className="create-wrapper">

                 <div className="create-cricle"></div>

                 <div className="create">
                     <form>
                     <input 
                     type="text" 
                     placeholder="Create a new todo..."
                     onChange={(e) => setListItem(e.target.value)}
                     value={listItem}
                     onKeyPress={addToTheList}
                     ></input>
                     </form>
                 </div>
             </div>

             
             {list.map((todo) =>
             
              <div className="todo-list-wrapper" key={todo.id}>
             
             <div className="list">
                
                 <div className="text">
                     <div onClick={() => todoCompleted(todo.id)}
                     className={`${todo.completed ? "checked-circle" : "unchecked-circle"}`}></div>
                     
                     
                     <div onClick={() => todoCompleted(todo.id)}
                     className={`${todo.completed ? "checked-list" : "unchecked-list"}`}
                     >{todo.text}</div>

                     </div>
                     <div className="delete" onClick={() => deleteItem(todo.id)}>
                         <img src={cross} alt="delete"/>
                     </div>
                     
                    </div>
                    </div>
             
             )}
           
           {list.length !== 0 &&
            <div className="list-states">
                    <div className="itemCount">{listItemsCount} itmes left</div>
                    <div className="clear" onClick={clearCompletedItems}>Clear Completed</div>
                 </div>}

            <div className="filter-todo-list">
                <div>All</div>
                <div>Active</div>
                <div>Completed</div>
            </div>
            

            <div className="drag-drop">
                <p>Drag and drop to reorder list</p>
            </div>
             </div>
         
        </main>
    )
}