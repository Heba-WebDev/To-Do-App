import React from "react";
import './Todo.css'
import cross from './assets/icon-cross.svg'
//import List from './List'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'


export default function Todo() {

    

    const [theme, setTheme] = React.useState(() => localStorage.getItem('mode')|| 'light');
    const [icon, setIcon] = React.useState(() => localStorage.getItem('modeicon') || moon);
   
    function switchTheTheme()  {
            setTheme(previousState => previousState === 'light' ? 'dark' : 'light') 
           setIcon(previousIcon => previousIcon === moon ? sun : moon)  
    }

     React.useEffect(() => {
       localStorage.setItem('mode', theme)
     }, [theme])

    React.useEffect(() => {
        localStorage.setItem('modeicon', icon)
    }, [icon])

   //Two states. first for the todo list array and second for the each item state

   const [list, setList] = React.useState(() =>
    JSON.parse(localStorage.getItem("todolist")) || []
   );

   const [listItem, setListItem] = React.useState("");


  

   function addToTheList(event) {
   
   
    if(event.key === 'Enter' && event.target.value !== '') {
        event.preventDefault()
        const newItem = {
            id: new Date().getTime(),
            text: listItem,
            completed: false,
            hide: false,
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


   const [listItemsCount, SetListItemsCount] = React.useState(() => Number(localStorage.getItem('counttodoitems')) || 0);

  
   React.useEffect(() => {
    localStorage.setItem("counttodoitems", JSON.stringify(listItemsCount))
}, [listItemsCount])
  

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

   function showAll() {
    const newList = [...list].map((todo) => {
            todo.hide = false
            return todo
    })

    setList(newList)
    
   }

   function showActive() {
    
   const newList = [...list].map((todo) => {
        if(todo.completed) {
            todo.hide = true
        } else {
            todo.hide = false
        }return todo
    })

    setList(newList)
    
   }

   function showCompleted() {
    const newList = [...list].map((todo) => {
        if(!todo.completed) {
            todo.hide = true 
        } else {
            todo.hide = false
        }return todo
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

             <div className="todo-list-wrapper">
             {list.map((todo) =>
             
           
             
             <div className="list" 
             style={{display: todo.hide ? 'none' : 'flex'}}
             key={todo.id}>
                
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
             
             )}</div>
           
           {list.length !== 0 &&
            <div className="list-states">
                    <div className="itemCount">{listItemsCount} itmes left</div>
                    <div className="clear" onClick={clearCompletedItems}>Clear Completed</div>
                 </div>}
       {list.length !== 0 &&
            <div className="filter-todo-list">
                <div onClick={showAll}>All</div>
                <div onClick={showActive}>Active</div>
                <div onClick={showCompleted}>Completed</div>
            </div>}
            

            
             </div>
         
        </main>
    )
}