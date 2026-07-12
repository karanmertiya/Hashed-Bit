import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => response.json())
      .then(data => {
        // Sort data by NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">IPL Season 2022 Points Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.Team}>
                <td>{team.No}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR}</td>
                <td>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
