import React from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  return (
    <div className="App">
      <main id="todolist">
        <h1>
          Todo List
          <span>Get things done, one item at a time.</span>
        </h1>
      <Task/>
      <AddTaskForm/>
      </main>
    </div>
  );
}

export default App;
