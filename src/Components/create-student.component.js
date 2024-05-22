//src/Components/create-student.component.js
// CreateStudent Component for add new student

// Import Modules
import React,
{
	useState,
	useEffect
} from "react";
import axios from 'axios';
import StudentForm
	from "./StudentForm";
import { Link } from "react-router-dom";

// CreateStudent Component
const CreateStudent = () => {
	const [formValues, setFormValues] =
		useState(
			{
				name: '',
				email: '',
				rollno: ''
			})
	// onSubmit handler
	const onSubmit =
		studentObject => {
			axios.post(
'http://localhost:4000/students/create-student',
				studentObject)
				.then(res => {
					if (res.status === 200)
						alert('Student successfully created')
					else
						Promise.reject()
				})
				.catch(err => alert('Something went wrong'))
		}

	// Return student form
	return (
		<>
		<StudentForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Create Student
		</StudentForm>
		{/* <Link to="/student-list"><button type="button" class="btn btn-primary">All Student</button></Link> */}
		</>
	)
}

// Export CreateStudent Component
export default CreateStudent
