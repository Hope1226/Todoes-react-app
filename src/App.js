import React, { useState } from 'react';
import addIcon from './assets/icons/add-icon.svg';
import uniqid from 'uniqid';
import Task from './Components/Tasks';
import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ task, setTask ] = useState(
    {
      title: '',
      id: uniqid(),
      completed: false,
      completeTask(){
        setTask({
          completed: true,
        })
      },
    }
  );

  const handleInput = (e) => {
    setTask({
      title: e.target.value,
      id: uniqid(),
      completed: false,
    });
  }

  const submitTask = (e) => {
    e.preventDefault();
    setTasks(
      tasks.concat(task)
    );
    setTask({title: ''})
  }


  return (
    <div className="App">
      <div className="main-dispaly">
        <form className="add-tasks" onSubmit={submitTask}>
          <input type="text" placeholder="Add a taks..." required onChange={handleInput}/>
          <button type="submit"><img src={addIcon} alt="add icon" /></button>
        </form>
          {tasks.length > 0 ? 
          <Task tasks={tasks} className={task.completed ? "active" : ""}/> :
          <h1>No tasks</h1>}
      </div>
    </div>
  );
}

export default App;
