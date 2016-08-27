//alert("hello");
$(document).ready(function(){
//$('.q, .end').hide(q);




//$('#timebutton') .on('click', function(event){
//$('.q, .end').hide(q);
//var$
	







$QuestionNum = 1;
$radionum = 1;

//var count = 120;
//var counter= setInterval(timer,1000);
var correctAnswers; 
var incorrectAnswers;
var unAnswered;

$("#done").on("click", function() {// use += when adding an onclick to total score
	  correctAnswers = $(':radio[class=true]:checked').length  //adds opal to total score i.e. total score = total score + opal
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


//$(document).ready(function(){




//$('#timer') .on('click', function(event){
		
		
		
			$(document).ready(function() {
                    var token;
                    var count = 120;
                    var counter = setInterval(minusSec, 1000);

                    function minusSec() {
                        count--;
                        $("#num").html(count);
                   
                     if (count === 0) {

                            clearInterval(counter);
                        };
                     };
                 



});
});


 //$ is a function to select multiple classes, use syntact in Parens .hide is a function