import React from "react";
import deleteIcon from '../assets/icons/delete-icon.svg'

const Task = (props) => {
  const { tasks, className } = props;
  return (
    <div className="taks-container">
    {tasks.map((task) =>{
      return (
      <div className="task" key={task.id}>
      <input type="checkbox" onChange={task.completeTask}/>
      <h2>{task.title}</h2>
      <button type="button" className={className} disabled={!task.completed}><img src={deleteIcon} alt="delete icon"/></button>
    </div>)
    })}
   </div>
  )
}

export default Task;