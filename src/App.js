import React from "react";
import './App.css';
import Todolist from './components/Todolist';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Todolist></Todolist>
    </div>
  );
};

export default App;
