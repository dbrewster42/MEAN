$.get("https://opentdb.com/api.php?amount=10&category=10&type=multiple", display)

function display(data){
	d = data.results;
	
	i = 0;
	
	for (question in d){
		i++;
		$("#a"+i).append("<p>" + d[question].question+ "</p>" + "<p>" + d[question].correct_answer+ "</p>")
		
		for (ic in d[question].incorrect_answers)
			
			$("#a"+i).append("<p>" + d[question].incorrect_answers[ic] + "</p>")
		
	}
}	
function play(){
	 $("#a1").click(function(){
	 	alert("You have clicked a button!");
	 	$(this).fadeOut();

	})
}
	// j= 0;
	// for (correct_answer in d){
	// 	j++;
	// 	$("#a"+i).append("<p>" + d[correct_answer].correct_answer+ "</p>")
	// 	console.log(d[correct_answer].correct_answer)
	// 	if (j = 5)
	// 		break;
	// }
	// k = 0;
	// for (incorrect_answers in d){
	// 	k++;
	// 	$("#a"+i).append("<p>" + d[incorrect_answers].incorrect_answers+ "</p>")
	// 	console.log(d[incorrect_answers].incorrect_answers)
	// 	if (k = 5)
	// 		break;
	// }
	


