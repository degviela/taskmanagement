import { useState, useEffect}  from 'react';
import React, { Component } from 'react';
import Header from './Header';
import '../App.css';


function App(){
  const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost/ralfsg/taskmanagement/back-end/getAllTasks.php')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('Error fetching data:', error))
    }, [])
    async function DeleteTask(id) {
      try {
        const response = await fetch(`http://localhost/ralfsg/taskmanagement/back-end/DeleteTask.php?id=${id}`, {
          method: 'DELETE', // Use DELETE method for deleting
        });
    
        if (response.ok) {
          // Handle a successful delete operation here, e.g., update UI
          console.log('Task deleted successfully');
          const deletedElement = document.getElementById(id);
          if (deletedElement) {
            deletedElement.remove();
          } else {
            console.error('Element not found for removal');
          }
        } else {
          // Handle errors here
          console.error('Request failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
    
  return (
    <div className="App">
      <Header/>
      <div className = 'data'>
      {data.map((task) =>(
                <div className='classData' id={task.id}>
                  <div className='row'  key={task.id}>
                    <h1>ID:</h1>
                    <>{task.id}</>
                    <h1>Title:</h1>
                    <>{task.title}</>
                    <h1>Description:</h1>
                    <>{task.description}</>
                    <h1>Status:</h1>
                    <>{task.status}</>
                    <h1>Due Date:</h1>
                    <>{task.due_date}</>
                    <button onClick ={()=> DeleteTask(task.id)}>Delete</button>
                    <a href={`http://localhost:3000/Insert?id=${task.id}`}>Link Text</a>

                  </div>
                  </div>
                  ))}
          </div>
      </div>

  );
  }

export default App;
