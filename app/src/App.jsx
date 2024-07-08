import React, { useState } from 'react';
import './App.css';
import Dis from './Dis';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      {!submitted ? (
        <div style={{ "width": "80vw", "margin": "auto", "marginTop": "3vh" }}>
          <div className="input-group mb-3">
            <span className="input-group-text">Your Name Please:</span>
            <input
              type="text"
              className="form-control"
              aria-label="Your Name"
              value={name}  // Bind the value of input to state
              onChange={handleChange}  // Handle input change
            />
          </div>
          <button
            style={{ "marginTop": "3vh" }}
            onClick={handleSubmit}
            type="button"
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      ) : (
        <Dis name={name} />
      )}
    </div>
  );
}

export default App;
