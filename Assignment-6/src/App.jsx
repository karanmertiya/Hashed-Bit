import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    const trimmedInput = inputValue.trim();
    // UX Improvement: Prevent adding empty tasks
    if (trimmedInput === '') {
      return;
    }

    // UX Improvement: Prevent duplicates
    if (tasks.includes(trimmedInput)) {
      alert('This task already exists!');
      return;
    }

    setTasks([...tasks, trimmedInput]);
    setInputValue(''); // Clear input after successful addition
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // UX Improvement: Allow adding task by pressing Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  // Sort tasks in ascending (alphabetical) order
  const sortedTasks = [...tasks].sort((a, b) => a.localeCompare(b));

  return (
    <div style={{ fontFamily: 'sans-serif', margin: '30px' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task..." 
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Add Task
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedTasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '15px', flexGrow: 1, maxWidth: '300px', wordWrap: 'break-word' }}>
              {task}
            </span>
            <button 
              onClick={() => handleDeleteTask(task)} 
              style={{ padding: '4px 8px', cursor: 'pointer', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {sortedTasks.length === 0 && <p style={{ color: 'gray' }}>No tasks yet. Add one above!</p>}
    </div>
  );
}

export default App;
