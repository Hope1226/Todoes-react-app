import React, { useState } from 'react';
import uniqid from 'uniqid';
import addIcon from './assets/icons/add-icon.svg';
import menu from './assets/icons/menu.svg';
import Task from './Components/Tasks';
import './App.css';
import Nav from './Components/Nav';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(
    {
      title: '',
      id: uniqid(),
      completed: false,
    },
  );
  const [nav, setNav] = useState(false);

  const handleInput = (e) => {
    setTask({
      title: e.target.value,
      id: uniqid(),
      completed: false,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    setTasks(
      tasks.concat(task),
    );
    setTask({ title: '' });
  };

  const completeTask = (e) => {
    if (e.target.checked) {
      setTask(tasks[e.target.id].completed = true);
    } else {
      setTask(tasks[e.target.id].completed = false);
    }
  };

  const deleteTask = () => {
    setTasks(
      tasks.filter((task) => task.completed === false),
    );
  };

  const openNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="App">
      <button type="button" className="menu-btn" onClick={openNav}><img src={menu} alt="menu" /></button>
      <Nav className={nav ? 'navOpen' : ''} closeFunction={closeNav} />
      <header>
        <h1 className="heroText">ToDoes</h1>
      </header>
      <div className="main-dispaly">
        <form className="add-tasks" onSubmit={submitTask}>
          <input type="text" placeholder="Add a taks..." required onChange={handleInput} />
          <button type="submit"><img src={addIcon} alt="add icon" /></button>
        </form>
        {tasks.length > 0
          ? (
            <Task
              tasks={tasks}
              completeTaskfunction={completeTask}
              className={task.completed ? 'active' : ''}
              deleteFuntion={deleteTask}
            />
          )
          : <h1>No tasks</h1>}
      </div>
    </div>
  );
}

export default App;
