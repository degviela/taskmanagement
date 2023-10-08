import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      due_date: '',
      status: 'todo', // Uzdevuma sākotnējais statuss (varat mainīt pēc vajadzības)
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Šeit jums būs jāizsūta šīs vērtības uz datu bāzi, izmantojot API pieprasījumu
    // Jūs varat izmantot "fetch" vai citas metodes, lai to izdarītu
    const data = {
      title: this.state.title,
      description: this.state.description,
      due_date: this.state.due_date,
      status: this.state.status,
    };
    console.log('Sūta uz datu bāzi:', data);
    // Šeit varat izsūtīt datus uz datu bāzi un veikt nepieciešamās darbības
    // Piemēram, izmantojot "fetch" vai citu atbilstošu bibliotēku
  };

  render() {
    return (
      <div>
        <h2>Ievadiet jaunu uzdevumu:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Virsraksts:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Apraksts:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              name="due_date"
              value={this.state.due_date}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Statuss:</label>
            <select
              name="status"
              value={this.state.status}
              onChange={this.handleInputChange}
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit">Pievienot uzdevumu</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
