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

  const completeTask = (e) => {
    if(e.target.checked){
      setTask(tasks[e.target.id].completed = true)
    } else {
      setTask(tasks[e.target.id].completed = false)
    };
    console.log(tasks[e.target.id])
  }

  const deleteTask = () => {
    setTasks(
        tasks.filter((task) => {
        return task.completed === false
        }
      )
    );

    console.log(tasks)
  }

  return (
    <div className="App">
      <header>
        <h1 className="heroText">ToDoes</h1>
      </header>
      <div className="main-dispaly">
        <form className="add-tasks" onSubmit={submitTask}>
          <input type="text" placeholder="Add a taks..." required onChange={handleInput}/>
          <button type="submit"><img src={addIcon} alt="add icon" /></button>
        </form>
          {tasks.length > 0 ? 
          <Task 
            tasks={tasks} 
            completeTaskfunction={completeTask} 
            className={task.completed ? "active" : ""} 
            deleteFuntion={deleteTask}
            /> :
          <h1>No tasks</h1>}
      </div>
    </div>
  );
}

export default App;
