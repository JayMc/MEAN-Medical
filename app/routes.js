
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

	//Rest routes
	app.get(urlPrefix+'/patients', function(req,res){
		res.json(patientsFixture)
	})

	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

}