import React from 'react';
import '../App.css';
import '../Insert.css';
import { Link } from 'react-router-dom';

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
  
        const response = await fetch('http://localhost/ralfsg/taskmanagement/back-end/insertData.php', {
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
      <header>
        {}
      <button className = "home-button">
      <Link to="/">
      <label>◀ Back</label>
      </Link>
      </button>
      </header>
        <h1>Task creation</h1>
        <form className="box">
            <label htmlFor="title">Title:</label>
            <input type="text" id = "title"/>
            <label htmlFor="description">Description:</label>
            <input type="text" id = "description"/>
            <label htmlFor="date">Date:</label>
            <input type="date" id = "date"/>
            <div className="submitButton">
          <button type="button" className="submit" onClick={sendDataToPHP}>
            Submit Data
          </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Insert;
