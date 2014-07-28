
var Patient = require('./models/patient');
var Appointment = require('./models/appointment');

var urlPrefix = '/api';

module.exports = function(app,_){

	patientsFixture = [
		{
			fname: 'Joe',
			sname: 'Cocker',
			age: 20
		},
		{
			fname: 'Bill',
			sname: 'Murry',
			age: 25
		},
		{
			fname: 'Micheal',
			sname: 'Jordan',
			age: 48
		},
		{
			fname: 'Larry',
			sname: 'The locksmith',
			age: 28
		},
		{
			fname: 'Bart',
			sname: 'Simpson',
			age: 16
		},
		{
			fname: 'Peter',
			sname: 'Griffin',
			age: 45
		}
	];

////////////////////////////////////////////////
//Rest routes
	
	//find all patients
	app.get(urlPrefix+'/patients', function(req,res){
		//res.json(patientsFixture)
		Patient.find(function(err, patients){
			if(err) return console.error(err);
				res.json(patients);
		})
	})

	//find all appointments for a given patient
	app.get(urlPrefix+'/patients/:id/appointments', function(req,res){
		//If patient had an array of appointment refs we could just use populate on the patient.appointments ref
		//But that gives us a second set of reference pointers that could get out of sync if there was a change between patients and appointments
		//Its safer to do a find of all appointments with the patient_id
		Appointment
			.find({_patient: req.params.id})
			.populate('_patient')
			.exec(function(err, appointments){
			if(err) return console.error(err);
				res.json(appointments);
		})
	})

	//create a patient
	app.post(urlPrefix+'/patients', function(req,res){
		var createPatient = new Patient({
			fname: req.body.fname,
			sname: req.body.sname,
			age: req.body.age
		});
		createPatient.save(function(err, patients){
			if(err) return console.error(err);

			res.json(createPatient);
		})
	})


//////////////////////////////
//Appointments

	//get all appointments
	app.get(urlPrefix+'/appointments', function(req,res){
		Appointment
			.find()
			.populate('_patient')
			.exec(function(err, appointments){
				if(err) return console.error(err);
					res.json(appointments);
			})
	})

	//create an appointment
	app.post(urlPrefix+'/appointments', function(req,res){
		var createAppointment = new Appointment({
			_patient: req.body.patient_id,
			type: req.body.type
		});
		createAppointment.save(function(err, appointments){
			if(err) return console.error(err);

			res.json(createAppointment);
		})
	})


//////////////////////////////
//static routes

	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

}