import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

function App() {

  const [theme, setTheme] = React.useState('light');

  return (
    <div className="app" data-theme='theme'>
    <Todo />
    </div>
  );
}

export default App;
