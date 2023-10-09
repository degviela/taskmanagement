import React, { useState } from 'react';

function TaskForm() {
  const [taskId, setTaskId] = useState('');
  const [task, setTask] = useState(null);

  const handleInputChange = (e) => {
    setTaskId(e.target.value);
  };

  const fetchTask = async () => {
    // ...
    // Iepriekšējais fetchTask funkcijas saturs
    // ...
  };

  return (
    <div>
      <h1>Uzdevuma iegūšana pēc ID</h1>
      <div>
        <label htmlFor="taskId">Ievadiet uzdevuma ID:</label>
        <input
          type="text"
          id="taskId"
          value={taskId}
          onChange={handleInputChange}
        />
        <button onClick={fetchTask}>Iegūt uzdevumu</button>
      </div>
      {task && (
        <div>
          <h2>Uzdevuma informācija:</h2>
          <p>ID: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.due_date}</p>
          <p>Status: {task.status}</p>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
