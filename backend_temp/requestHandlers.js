var questions = require('./json/questions');
var querystring = require("querystring");

/**
 * Get questions list
 * @param response
 * @param request
 */
function getQuestions(response, request) {
  console.log("Request handler 'getQuestions' was called.");

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
 * @type {getQuestions}
 */

function saveAnswers(response, request) {
	console.log("Request handler 'saveAnswers' was called.");

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

exports.getQuestions = getQuestions;
exports.saveAnswers = saveAnswers;
