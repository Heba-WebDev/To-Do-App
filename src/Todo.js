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
        
        setListItem("")
        
    }
   }

   function deleteItem(id) {
      const newList = [...list].filter((todo) => todo.id !== id)

      setList(newList)
   }

   function todoCompleted(id) {

   const newList = [...list].map((todo) => { if(todo.id === id) {
     todo.completed = !todo.completed }
     return todo
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
            
            
             </div>
         
        </main>
    )
}