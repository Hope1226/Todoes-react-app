import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import addIcon from './assets/icons/add-icon.svg';
import menu from './assets/icons/menu.svg';
import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/Todo';
import Home from './Components/Home';
import About from './Components/About';

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
    if (tasks[e.target.id].completed === true) {
      setTask(tasks[e.target.id].completed = false);
    } else {
      setTask(tasks[e.target.id].completed = true);
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
    <BrowserRouter>
      <div className="App">
        <button type="button" className="menu-btn" onClick={openNav}><img src={menu} alt="menu" /></button>
        <Nav className={nav ? 'navOpen' : ''} closeFunction={closeNav} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/todo"
            element={(
              <Todo
                submitTask={submitTask}
                handleInput={handleInput}
                addIcon={addIcon}
                tasks={tasks}
                completeTask={completeTask}
                task={task}
                deleteTask={deleteTask}
              />
          )}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
