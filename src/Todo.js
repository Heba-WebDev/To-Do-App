import React from "react";
import ReactDOM from 'react-dom'
import './Todo.css'
import List from './List'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'
import cross from './assets/icon-cross.svg'

export default function Todo() {

    
    const [theme, setTheme] = React.useState('light');
    const [icon, setIcon] = React.useState(moon);
    function switchTheTheme()  {
            setTheme(previousState => previousState === 'light' ? 'dark' : 'light') 
            setIcon(previousIcon => previousIcon === moon ? sun : moon)
    }

    const [list, setList] = React.useState([]);
    const [listText, setListText] = React.useState("");
    const [listItemsCount, setListItemsCount] = React.useState(0);


    

    function addToTheList(event) {
     
        const newTodoItem = {
            id: new Date().getTime(),
            text: listText,
            completed: false,
        }
       if(event.key === 'Enter' && event.target.value !== '') {
           setListText(event.target.value)
           
             setList([...list].concat(event.target.value));
              event.target.value = '';
              setListText("")
              setListItemsCount(previousCount => previousCount + 1)
       }
    }
    


    function addToItemCount() {
        setListItemsCount(previousCount => previousCount + 1)
      
    }

    function substractItemCount() {
        if(listItemsCount > 0) {
            setListItemsCount(previousCount => previousCount - 1)
        }
    }
   

    const [checkedList, setCheckedList] = React.useState(false);



  function isListChecked() {
    setCheckedList((previousState) =>  previousState === false ? true : false)
    checkedList ?  addToItemCount()  :   substractItemCount()
  }

function deleteThisItem(event, id)  {
   if(!checkedList) {
    substractItemCount()
   }
   event.preventDefault()
   event.target.parentNode.parentNode.remove() 
   const newList = list.filter(item => item.id !== id);
   setList(newList)
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
               
           return   <div className="list" >
              
           <div className="text">
               <div onClick={isListChecked} 
               className={`${checkedList ? "checked-circle" : "unchecked-circle"}`}></div>
               
               
               <div onClick={isListChecked} 
               className={`${checkedList ? "checked-list" : "unchecked-list"}`}
               >{newList}</div>

               </div>
               <div className="delete" onClick={deleteThisItem}>
                   <img src={cross} alt="delete" />
               </div>
               
              


       </div>
             
          
           })
           
           }
              


             </div>}
             
         </div>
        </main>
    )
}