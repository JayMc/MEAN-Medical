var mongoose = require('mongoose');

var appointmentSchema = mongoose.Schema({
	_patient: {
		type: String,
		ref: 'Patient'
	},
	type: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
