import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const backendUrl = 'http://localhost:3333';

const _formData = {
	firstName: '',
	lastName: '',
	title: '',
	age: 0
}

function App() {
	const [employees, setEmployees] = useState([]);
	const [formData, setFormData] = useState(_formData);

	useEffect(() => {
		(async () => {
			setEmployees((await axios.get(`${backendUrl}/employees`)).data);
		})();
	}, []);

	const handleFormFieldChange = (fieldName, value) => {
		formData[fieldName] = value;
		setFormData({ ...formData });
	}

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
								value={formData.firstName}
								onChange={(e)=>handleFormFieldChange('firstName', e.target.value)}
								name="firstName"
								id="firstName" />

							<label for="lastName">Last Name:</label>
							<input type="text"
								value={formData.lastName}
								onChange={(e)=>handleFormFieldChange('lastName', e.target.value)}
								name="lastName"
								id="lastName" />

							<label for="title">Title:</label>
							<input type="text"
								value={formData.title}
								onChange={(e)=>handleFormFieldChange('title', e.target.value)}
								name="title"
								id="title" />

							<label for="age">Age:</label>
							<input type="text"
								value={formData.age}
								onChange={(e)=>handleFormFieldChange('age', e.target.value)}
								class="typeNumber"
								name="age"
								id="age" />

							<div className="buttonRow">
								<button>Save</button>
							</div>
						</fieldset>

					</form>
					<pre>
						{JSON.stringify(formData, null, 2)}
					</pre>
				</section>
			</main>
		</div>
	);
}

export default App;
