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
			<div className="employees">
				{employees.map(employee => {
					return (
						<div className="employee" key={employee.id}>
							<div className="fullName">{employee.firstName} {employee.lastName}</div>
							<div className="title">{employee.title}</div>
							<div className="age">Age: {employee.age}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
