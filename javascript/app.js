//alert("hello");
$(document).ready(function(){
//$('.q, .end').hide(q);


//$('#timebutton') .on('click', function(event){
//$('.q, .end').show(q);	




//})

$QuestionNum = 1;
$radionum = 1;

//var count = 120;
//var counter= setInterval(timer,1000);
var correctAnswers
var incorrectAnswers
var unanswered

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
//$('.q, .end').hide(q);

 //$ is a function to select multiple classes, use syntact in Parens .hide is a function