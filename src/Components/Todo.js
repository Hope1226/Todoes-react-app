/* eslint-disable react/prop-types */
import React from 'react';
import Task from './Tasks';
import './todo.css';

const Todo = (props) => {
  const {
    submitTask, handleInput, addIcon, tasks, completeTask, task, deleteTask,
  } = props;

  return (
    <div className="app-container">
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
};

export default Todo;
