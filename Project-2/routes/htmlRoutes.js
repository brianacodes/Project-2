var path = require("path");

module.exports = function(app){

	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/views/index.html"));
	});

	app.get('/survey', function (req, res) {
	  	res.sendFile(path.join(__dirname, "../public/views/survey.html"));
  });
  
  app.get('/solutions', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/solutions.html"));
});
};