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
			<main>
				<section className="showEmployeesArea">
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
				</section>
				<section className="addEmployeeArea">
					<h2>Add Employee</h2>
					<form>
						<fieldset>
							<label for="firstName">First Name:</label>
							<input type="text"
								name="firstName"
								id="firstName" />

							<label for="lastName">Last Name:</label>
							<input type="text"
								name="lastName"
								id="lastName" />

							<label for="title">Title:</label>
							<input type="text"
								name="title"
								id="title" />

							<label for="age">Age:</label>
							<input type="text"
								class="typeNumber"
								name="age"
								id="age" />

							<div className="buttonRow">
								<button>Save</button>
							</div>
						</fieldset>

					</form>
				</section>
			</main>
		</div>
	);
}

export default App;
