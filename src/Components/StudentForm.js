//src / Components / StudentForm.js
import React from "react";
import * as Yup from "yup";
import './studentForm.css';
import {
	Formik, Form,
	Field, ErrorMessage
} from "formik";
import {
	FormGroup,
	FormControl, Button,
	NavLink
} from "react-bootstrap";

const StudentForm = (props) => {
	const validationSchema =
		Yup.object().shape({
			name: Yup.string().required("Required"),
			email: Yup.string()
				.email(
`You have enter an invalid email address`
				)
				.required("Required"),
			rollno: Yup.number()
				.positive("Invalid roll number")
				.integer("Invalid roll number")
				.required("Required"),
		});
	//console.log(props);
	return (
		<div id="enter1">
			<h3>Student Form</h3>
            <div className="form-wrapper">
			<Formik {...props}
				validationSchema={validationSchema}>
				<Form>
				<br/>
					<FormGroup>
						<label>Name</label>
						<Field name="name" type="text"
							className="form-control" placeholder ="Please enter your Name"/>
							
						<ErrorMessage
							name="name"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<br/> 
					<FormGroup>
					<label>Email Id</label>
						<Field name="email"
							type="email"
							className="form-control" placeholder ="Please enter your Email" />
						<ErrorMessage
							name="email"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<br/>
					<FormGroup>
					<label>Roll No</label>
						<Field name="rollno"
							type="number"
							className="form-control" placeholder ="Please enter your Roll No"/>
						<ErrorMessage
							name="rollno"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<br/>
					<Button variant="danger" size="lg"
						block="block" type="submit">
						{props.children}
					</Button>
				</Form>
			</Formik>
		</div>
		</div>
	);
};

export default StudentForm;
