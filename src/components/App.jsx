import { useState, useEffect}  from 'react';
import React, { Component } from 'react';
import '../App.css';


function App(){
  const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost/ralfsprogram/programmesanas-darbi/taskmanagement/TM/back-end/getAllTasks.php')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('Error fetching data:', error))
    }, [])
  return (
    <div className="App">
      {data.map((task) =>(
                <div className='classData'>
                  <div className='row' id={task.id} key={task.id}>
                    <h1>{task.id}</h1>
                    <h1>{task.title}</h1>
                    <h1>{task.description}</h1>
                    <h1>{task.status}</h1>
                    <h1>{task.due_date}</h1>
                  </div>
                  </div>
                  ))}
      </div>

  );
  }

export default App;
