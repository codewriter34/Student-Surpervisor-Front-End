import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// src/main.jsx or src/index.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


function SupervisorFinder() {
  const [researchAreas, setResearchAreas] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [supervisors, setSupervisors] = useState([]);

  // Fetch research areas & topics on mount
  useEffect(() => {
    fetch('http://localhost:4000/research-areas')
      .then(res => res.json())
      .then(data => setResearchAreas(data))
      .catch(console.error);

    fetch('http://localhost:4000/topics')
      .then(res => res.json())
      .then(data => setTopics(data))
      .catch(console.error);
  }, []);

  // Fetch supervisors when area or topic changes
  useEffect(() => {
    if (selectedArea || selectedTopic) {
      let url = 'http://localhost:4000/supervisors?';

      if (selectedArea) url += `area=${encodeURIComponent(selectedArea)}`;
      if (selectedTopic) url += `&topic=${encodeURIComponent(selectedTopic)}`;

      fetch(url)
        .then(res => res.json())
        .then(data => setSupervisors(data))
        .catch(console.error);
    } else {
      setSupervisors([]);
    }
  }, [selectedArea, selectedTopic]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            Research Portal
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavFinder"
            aria-controls="navbarNavFinder"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavFinder">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/find-supervisor" className="nav-link active" aria-current="page">
                  Find Supervisor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-5" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Find Supervisors</h2>

        <div className="mb-4">
          <label htmlFor="researchArea" className="form-label fw-semibold">
            Select Research Area:
          </label>
          <select
            id="researchArea"
            className="form-select"
            value={selectedArea}
            onChange={e => setSelectedArea(e.target.value)}
          >
            <option value="">-- Select an area --</option>
            {researchAreas.map(area => (
              <option key={area.name} value={area.name}>{area.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="topic" className="form-label fw-semibold">
            Select Topic:
          </label>
          <select
            id="topic"
            className="form-select"
            value={selectedTopic}
            onChange={e => setSelectedTopic(e.target.value)}
          >
            <option value="">-- Select a topic --</option>
            {topics.map(topic => (
              <option key={topic.title} value={topic.title}>{topic.title}</option>
            ))}
          </select>
        </div>

        <h3 className="mt-5 mb-3 text-center">Suggested Supervisors</h3>
        {supervisors.length === 0 ? (
          <p className="text-center text-muted">No supervisors found for selected criteria.</p>
        ) : (
          <ul className="list-group shadow-sm">
            {supervisors.map(({ name, email }, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span className="fw-semibold">{name}</span>
                <a href={`mailto:${email}`} className="text-decoration-none text-primary">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default SupervisorFinder;
