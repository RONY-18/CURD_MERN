//src/Components/student-list.component.js
import React,
{
	useState,
	useEffect
} from "react";
import axios
	from "axios";
import { Table }
	from "react-bootstrap";
import StudentTableRow
	from "./StudentTableRow";
import { Link } from "react-router-dom";


const StudentList = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/students/")
			.then(({ data }) => {
				setStudents(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const DataTable = () => {
		return students.map((res, i) => {
			return <StudentTableRow
				obj={res} key={i} />;
		});
	};

	return (
		<>
		{/* <nav class="navbar navbar-expand-sm navbar-light bg-light">
			<Link to="/" style={{marginLeft: "50px"}}><button type="button" class="btn btn-primary">Add Student</button></Link>
			<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</nav> */}
		<div className="table-wrapper">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Roll No</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{DataTable()}</tbody>
			</Table>
		</div>
		
		</>
	);
};

export default StudentList;
