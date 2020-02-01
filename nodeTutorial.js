var tutor = require('./tutorial.js');

exports.nodeTutorial = function(){
  console.log("Node Tutorial");
  this.pTutor = function(){
    var pTutor = tutor;
    pTutor.tutorial();
  }
}
