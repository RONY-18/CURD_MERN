//App.js
// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
	from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
	BrowserRouter, Routes,
	Route, Link
} from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";
	
import Navbarrr from "./Components/Navbarrr";

// App Component
const App = () => {
	return (
		<BrowserRouter>
		<Navbarrr/>
		<Routes>
			  <Route path="/" element={<CreateStudent />} />
			  <Route path="/create-student" element={<CreateStudent />} />
			  <Route path="/edit-student/:id" element={<EditStudent />} />
			  <Route path="/student-list" element={<StudentList />} />
		</Routes>
	</BrowserRouter>
	);
};

export default App;
