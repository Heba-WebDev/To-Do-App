import React, {useState} from "react";
import './Todo.css'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'


export default function Todo() {

    let themeIcon = moon;
    const [theme, setTheme] = React.useState('light');
    const [icon, setIcon] = React.useState(moon);
    function switchTheTheme()  {
            setTheme(previousState => previousState == 'light' ? 'dark' : 'light') 
            setIcon(previousIcon => previousIcon == moon ? sun : moon)
    }

    
    return (
        <main className="todo-wrapper" data-theme={theme}>
         <nav className="navbar">
             <h1>T O D O</h1>
             <img className="icon" src={icon} onClick={switchTheTheme}/>
         </nav>

         <div className="todo-app">
             <div className="create-wrapper">
                 <div className="create-cricle"></div>
                 <div className="create">
                     <input type="text" placeholder="Create a new todo..."></input>
                 </div>
             </div>

             <div className="todo-list-wrapper">
             <div className="list">
                 {/* first list */}
                 <div className="text">
                     <div className="list-cricle"></div>
                     <div className="list-text">Comeplete the react cource</div>
                     </div>
                     <div className="delete"></div>
                     <hr></hr>
                    </div>

                 {/* second list */}
                 <div className="list">
                     <div className="text">
                     <div className="list-cricle"></div>
                     <div className="list-text">Learn Tailwind</div>
                     </div>
                     <div className="delete"></div>
                     <hr></hr>
                 </div>

                  {/* third list */}
                  <div className="list">
                     <div className="text">
                     <div className="list-cricle"></div>
                     <div className="list-text">Start CS50</div>
                     </div>
                     <div className="delete"></div>
                     <hr></hr>
                 </div>
                
                 <div className="list-states">
                    <div className="itemCount">3 itmes left</div>
                    <div className="clear">Clear Completed</div>
                </div>

                

             </div>
         </div>
        </main>
    )
}