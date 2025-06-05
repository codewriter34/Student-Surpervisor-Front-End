import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PopularStats() {
  const [researchData, setResearchData] = useState([]);
  const [supervisorData, setSupervisorData] = useState([]);
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/stats/top-research-areas')
      .then(res => res.json())
      .then(data => setResearchData(data))
      .catch(console.error);

    // Fix: correct URL to match backend route
    fetch('http://localhost:4000/popular-supervisors')
      .then(res => res.json())
      .then(data => setSupervisorData(data))
      .catch(console.error);

    fetch('http://localhost:4000/stats/top-topics')
      .then(res => res.json())
      .then(data => {
        setTopicData(data);
        console.log('Topics:', data); // Debugging to confirm data shape
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      
      <div style={{ width: 400, height: 300 }}>
        <h3 style={{ textAlign: 'center' }}>Top Research Areas</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={researchData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis type="number" />
            <YAxis dataKey="researchArea" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="studentCount" fill="#8884d8" name="Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: 400, height: 300 }}>
        <h3 style={{ textAlign: 'center' }}>Top Topics</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topicData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis type="number" />
            <YAxis dataKey="topic" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="studentCount" fill="#ffc658" name="Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: 400, height: 300 }}>
        <h3 style={{ textAlign: 'center' }}>Top Supervisors</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={supervisorData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis type="number" />
            <YAxis dataKey="supervisor" type="category" />
            <Tooltip />
            <Legend />
            {/* Fix: use 'count' here, not 'studentCount' */}
            <Bar dataKey="count" fill="#82ca9d" name="Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default PopularStats;
