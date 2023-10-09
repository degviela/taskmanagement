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
  return (
    <div className="App">
      <Header/>
      <div className = 'data'>
      {data.map((task) =>(
                <div className='classData'>
                  <div className='row' id={task.id} key={task.id}>
                    
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
                  </div>
                  </div>
                  ))}
          </div>
      </div>

  );
  }

export default App;
