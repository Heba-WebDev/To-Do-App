import React, {useState} from "react";
import './Todo.css'
import moon from './assets/icon-moon.svg'

export default function Todo() {
    return (
        <main className="todo-wrapper">
         <nav className="navbar">
             <h1>T O D O</h1>
             <img src={moon} />
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