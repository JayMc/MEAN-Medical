var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
	fname: String,
	sname: String,
	age: Number
});

module.exports = mongoose.model('Patient', patientSchema);