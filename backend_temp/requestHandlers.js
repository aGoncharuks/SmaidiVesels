var schools = require('./json/schools');
var questions = require('./json/questions');
var querystring = require('querystring');

function getSchools(response) {

	// Website you wish to allow to connect
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
	// Request methods you wish to allow
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	response.writeHead(200, {"Content-Type": "text/json"});
	response.write(JSON.stringify(schools));
	response.end();
}

/**
 * Get questions list
 * @param response
 * @param request
 */
function getQuestions(response) {

	// Website you wish to allow to connect
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
	// Request methods you wish to allow
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	response.writeHead(200, {"Content-Type": "text/json"});
	response.write(JSON.stringify(questions));
	response.end();
}

/**
 * Save survey results
 * @param response
 * @param postData
 */
function saveAnswers(response, postData) {
	
	console.log(postData);

	// Website you wish to allow to connect
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
	// Request methods you wish to allow
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	response.writeHead(200, {"Content-Type": "text/json"});
	response.write("Survey results successfully saved");
	response.end();
}

/**
 * Get study content by id
 * @param response
 * @param postData
 */
function getStudyContent(response, postData) {

	// Website you wish to allow to connect
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
	// Request methods you wish to allow
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	response.writeHead(200, {"Content-Type": "text/json"});

	var content = '<h2>Stadijas virsraksts</h2><i>Stadijas teksts italic</i>';
	response.write(content);
	response.end();
}

exports.getSchools = getSchools;
exports.getQuestions = getQuestions;
exports.saveAnswers = saveAnswers;
exports.getStudyContent = getStudyContent;
