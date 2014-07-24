
module.exports = function(app,_){

	//Rest routes

	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

}