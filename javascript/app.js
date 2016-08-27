alert("hello");
$(document).ready(function(){
$('.q').hide();
$('.end').hide();


//$('#timebutton') .on('click', function(event){
//$('.q, .end').hide(q);
//var$


	var count = 120;
$(".timerbutton").on("click", function() {
 					var token;
                   counter = setInterval(minusSec, 1000); 
                   $('.q').show(); 

                    

});
function minusSec() {

						 
                        count--;
                        $("#num").html(count);
                   
                     if (count === 0) {

                            clearInterval(counter);
                        };
                     };



$QuestionNum = 1;
$radionum = 1;

//var count = 120;
//var counter= setInterval(timer,1000);
var correctAnswers; 
var incorrectAnswers;
var unAnswered;

$("#done").on("click", function() {
$('.end').show();
	  correctAnswers = $(':radio[class=true]:checked').length 
	   incorrectAnswers = $(':radio[class=false]:checked').length
	   unAnswered = 8 - correctAnswers - incorrectAnswers;
$(".trues").html(correctAnswers);
$(".falses").html(incorrectAnswers);
$(".Unanswered").html(unAnswered);
// need to interact with DOM
	//checkScore();











 })


           
//$('#timer') .on('click', function(event){

//function timer(){
		//count--;
		//if(count == 0){

			//	clearInterval(counter);
	//	}
//document.getElementById("num").innerHTML = count;
//}
//})







//$('#timer') .on('click', function(event){
		
		
		
		



});



 //$ is a function to select multiple classes, use syntact in Parens .hide is a function