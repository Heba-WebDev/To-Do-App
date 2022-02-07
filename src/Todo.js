import React from "react";
import './Todo.css'
import List from './List'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'


export default function Todo() {

    
    const [theme, setTheme] = React.useState('light');
    const [icon, setIcon] = React.useState(moon);
    function switchTheTheme()  {
            setTheme(previousState => previousState === 'light' ? 'dark' : 'light') 
            setIcon(previousIcon => previousIcon === moon ? sun : moon)
    }

    const [list, setList] = React.useState([]);
    const [listItemsCount, setListItemsCount] = React.useState(0);
    
    function addToTheList(event) {
       if(event.key === 'Enter' && event.target.value !== '') {
           let value = event.target.value;
             setList(oldArray => [...oldArray, value]);
              event.target.value = '';
              setListItemsCount(previousCount => previousCount + 1)
       }
    }

    //const [completed, setCompleted] = React.useState(false);
 
    // function itemListCompleted() {
        
    //     if(listItemsCount > 0) {
    //         setListItemsCount(previousCount => previousCount - 1)
    //     } 
    //    // setCompleted(previousState => !previousState)
    //    // setListItemsCount(previousCount => previousCount + 1)
       
    // }

    function addToItemCount() {
        setListItemsCount(previousCount => previousCount + 1)
    }

    function substractItemCount() {
        if(listItemsCount > 0) {
            setListItemsCount(previousCount => previousCount - 1)
        }
    }

    function deleteItem(event) {
        list.map((newList,index) => {
          console.log(event.target.newList)
        })
    }
    
    return (
        <main className="todo-wrapper" data-theme={theme}>
         <nav className="navbar">
             <h1>T O D O</h1>
             <img className="icon" alt="light-dark mode icon" src={icon} onClick={switchTheTheme}/>
         </nav>

         <div className="todo-app">
             <div className="create-wrapper">
                 <div className="create-cricle"></div>
                 <div className="create">
                     <input 
                     type="text" 
                     placeholder="Create a new todo..."
                     onKeyPress={addToTheList}
                     ></input>
                 </div>
             </div>

             {list.length !== 0 && 
             
             
             <div className="todo-list-wrapper">
           {list.map((newList,index) => {
           return <List 
           value={newList} 
           key={index} 
           handeleDelete={deleteItem}
           handleCount={addToItemCount}
           handleClick={substractItemCount}/>
           })
           
           }
              {list.length != 0 && listItemsCount != 0 &&
                 <div className="list-states">
                    <div className="itemCount">{listItemsCount} itmes left</div>
                    <div className="clear">Clear Completed</div>
                 </div> }
             </div>}
             
         </div>
        </main>
    )
}