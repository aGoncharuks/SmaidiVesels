var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/get/questions"] = requestHandlers.getQuestions;
handle["/save/answers"] = requestHandlers.saveAnswers;

server.start(router.route, handle);
