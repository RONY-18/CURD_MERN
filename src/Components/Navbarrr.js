import { Link } from "react-router-dom";

function Navbarrr(){
    return(
       <>
       <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link to="/" style={{marginLeft: "50px"}}><button type="button" class="btn btn-primary">Add Student</button></Link>
			<Link to="/student-list" style={{marginLeft: "50px"}}><button type="button" class="btn btn-primary">All Student</button></Link>
			<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</nav>
       </>
    );
}
export default Navbarrr