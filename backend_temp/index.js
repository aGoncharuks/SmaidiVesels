var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/get/schools"] = requestHandlers.getSchools;
handle["/get/questions"] = requestHandlers.getQuestions;
handle["/save/answers"] = requestHandlers.saveAnswers;
handle["/get/study/content"] = requestHandlers.getStudyContent;

server.start(router.route, handle);
