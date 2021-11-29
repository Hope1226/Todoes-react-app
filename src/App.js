import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ task, setTask ] = useState('');
  const [ taskId, setId ] = useState(uniqid());
  const [ completedTask, setStatus ] = useState(false);


  return (
    <div className="App">
 
    </div>
  );
}

export default App;
