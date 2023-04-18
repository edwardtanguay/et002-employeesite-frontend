import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const backendUrl = 'http://localhost:3333';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      setEmployees((await axios.get(`${backendUrl}/employees`)).data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Company Site</h1>
      <h2>Employees</h2>
      <p>There are {employees.length} employees:</p>
    </div>
  );
}

export default App;
