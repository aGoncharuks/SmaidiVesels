var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
/**
 * GET
 */
handle["/get/schools"] = requestHandlers.getSchools;
/**
 * GET
 */
handle["/get/questions"] = requestHandlers.getQuestions;
/**
 * POST
 * Params: {student, answers}
 */
handle["/save/answers"] = requestHandlers.saveAnswers;
/**
 * POST
 * Params: {contentId}
 */
handle["/get/study/content"] = requestHandlers.getStudyContent;

server.start(router.route, handle);
