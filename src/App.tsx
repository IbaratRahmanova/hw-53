import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import Icon from "@mui/material/Icon";


const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Task 1'},
    { id: '2', text: 'Task 2'},
    { id: '3', text: 'Task 3'},
  ]);

  let [currentTask, setCurrentTask] = useState('');

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask = {
      id: String(Date.now()),
      text: currentTask,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId:string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <Icon>star</Icon>;
      <main id="todolist">
        <h1>
          Todo List
          <span>Get things done, one item at a time.</span>
        </h1>
        <AddTaskForm
          taskText={currentTask}
          onChangeTask={event => changeTask(event)}
          onHandleAddTask={event => handleAddTask(event)}
        />
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
