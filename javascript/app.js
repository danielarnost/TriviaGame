//alert("hello");

$QuestionNum = 1;
$radionum = 1;

var count = 120;
var counter= setInterval(timer,1000);
var correctAnswers
var incorrectAnswers
var unanswered

function timer(){
		count--;
		if(count == 0){

				clearInterval(counter);
		}
document.getElementById("num").innerHTML = count;
}



$(document).ready(function(){




//$('#timer') .on('click', function(event){
		
		
		
			//$("#num").html(count);

});


//$('.q, .end').hide() //$ is a function to select multiple classes, use syntact in Parens .hide is a function