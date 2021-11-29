import React from "react";
import deleteIcon from '../assets/icons/delete-icon.svg'

const Task = (props) => {
  const { tasks, className, completeTaskfunction, deleteFuntion } = props;
  return (
    <div className="taks-container">
    {tasks.map((task) =>{
      return (
      <div className="task" key={task.id}>
      <input type="checkbox" id={tasks.indexOf(task)} onChange={completeTaskfunction}/>
      <h2>{task.title}</h2>
      <button type="button" className={className} disabled={!task.completed} onClick={deleteFuntion}><img src={deleteIcon} alt="delete icon"/></button>
    </div>)
    })}
   </div>
  )
}

export default Task;