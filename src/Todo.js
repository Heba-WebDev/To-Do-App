import React, {useState} from "react";
import './Todo.css'
import moon from './assets/icon-moon.svg'


export default function Todo() {
    const [theme, setTheme] = React.useState('light');
    const switchTheTheme = () => {
        
            setTheme('dark')
        
        
    }
    return (
        <main className="todo-wrapper" data-theme={theme}>
         <nav className="navbar">
             <h1>T O D O</h1>
             <img src={moon} onClick={switchTheTheme}/>
         </nav>

         <div className="todo-app">
             <div className="create-wrapper">
                 <div className="create-cricle"></div>
                 <div className="create">
                     <input type="text" placeholder="Create a new todo..."></input>
                 </div>
             </div>
         </div>
        </main>
    )
}