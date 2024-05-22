//src/Components/edit-student.component.js
// EditStudent Component for update student data

// Import Modules
import React,
{
	useState,
	useEffect
} from "react";
import axios from "axios";
import StudentForm
	from "./StudentForm";
import { useParams,useNavigate } from 'react-router-dom';

// EditStudent Component
const EditStudent = (props) => {
	const [formValues, setFormValues] =
		useState(
			{
				name: "",
				email: "",
				rollno: "",
			}
		);
		const {id} = useParams();
	//onSubmit handler
	const navigate=useNavigate();
	const onSubmit = (studentObject) => {
		axios
			.put(
"http://localhost:4000/students/update-student/" +id,
				studentObject
			)
			.then((res) => {
				if (res.status === 200) {
					alert("Student successfully updated");
					// props.history.push("/student-list");
					navigate('/student-list');
				} else Promise.reject();
			})
			.catch(
				(err) =>
					alert("Something went wrong")
			);
	};
	
	// Load data from server and reinitialize student form
// 	useEffect(() => {
// 		axios
// 			.get(
// "http://localhost:4000/students/update-student/"+id
// 			)
// 			.then((res) => {
// 				const {
// 					name,
// 					email,
// 					rollno
// 				} = res.data;
// 				setFormValues(
// 					{
// 						name,
// 						email,
// 						rollno
// 					});
// 			})
// 			.catch(
// 				(err) =>
// 					console.log(err)
// 			);
// 	}, []);
	useEffect(() => {
        const fecthData = async () => {
            await axios.get("http://localhost:4000/students/update-student/"+id)
                .then(res => {
                    
					const name=res.data[0].name;
					const email=res.data[0].email;
					const rollno=res.data[0].rollno;
					setFormValues(
						{
						name,
						email,
						rollno
						});
					
                });
        };
        fecthData();
    }, []);

	// Return student form
	return (
		<StudentForm
			initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Update Student
		</StudentForm>
	);
};

// Export EditStudent Component
export default EditStudent;
