//backend/routes/student.route.js
let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();

// Student Model
let studentSchema =
	require("../models/student");

// CREATE Student
router.post("/create-student", function(req,res) {
	const forms = new studentSchema({
		name: req.body.name,
		email: req.body.email,
		rollno: req.body.rollno,
	  });
	  studentSchema.create(forms);
	  res.json("Inserted Successfully");
	});

// READ Students
router.get("/", async function(req,res) {
	const users = await studentSchema.aggregate([{ $sort: { createdAt: -1 } }]).exec();
	res.json(users);
});



//UPDATE student
router
	.route("/update-student/:id")
	// Get Single Student
	.get(async function(req,res){
		console.log(req.params.id);
		const users = await studentSchema.find({ 
			_id: req.params.id });
			console.log(users);
		res.json(users);
	})

	// Update Student Data
	.put(async function(req,res) {
		const forms = new studentSchema({
			name: req.body.name,
			email: req.body.email,
			rollno: req.body.rollno,
		  });
		const users = await studentSchema.find({ _id: req.params.id });
		const users_update = await studentSchema.updateOne(
			{ _id: req.params.id },
			{name: req.body.name,
				email: req.body.email,
				rollno: req.body.rollno,},
		  );
		console.log(users);
			res.json("Student updated successfully !");
			
		}
		);

// Delete Student
router.delete("/delete-student/:id",async function(req,res) {
			const users = await studentSchema.deleteOne({ 
				_id: req.params.id });;
			res.json("Deleted Successfully");
	});

module.exports = router;
