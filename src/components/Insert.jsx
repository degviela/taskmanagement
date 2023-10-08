import React from 'react';
import '../App.css';

function Insert() {

  const sendDataToPHP = async () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dateInput = document.getElementById('date').value;
    try {
        const data = {
          title,
          description,
          date: dateInput,
        };
  
        const response = await fetch('http://localhost/ralfsprogram/programmesanas-darbi/taskmanagement/TM/back-end/insertData.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          // Request was successful
          const result = await response.json();
          console.log(result);
          let title = document.getElementById('title');
          title.value = '';
          let description = document.getElementById('description');
          description.value = '';
          let date = document.getElementById('date');
          date.value = '';
        } else {
          // Handle errors here
          console.error('Request failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  
    return (
      <div className="main">
        Task creation
        <form className="box">
            <input type="text" id = "title"/>
            <input type="text" id = "description"/>
            <input type="date" id = "date"/>
          <button type="button" className="submit" onClick={sendDataToPHP}>
            Submit Data
          </button>
        </form>
      </div>
    );
  }
  
  export default Insert;
