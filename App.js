import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
      setList([...list, newTask]);
      setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTask = list.filter((task, i) => i !== index);
    setList(updatedTask);
  };

  const editTask = (index, updatedText) => {
    const updatedTask = [...list];
    updatedTask[index] = updatedText;
    setList(updatedTask);
  };

  const deleteAllTasks = () => {
    setList([]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
        <button onClick={deleteAllTasks}>Delete All</button>
      </div>
      <ul>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index, prompt('Edit Task:', task))}>
              Edit
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
