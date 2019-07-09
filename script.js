$(document).ready(function(){
	var randomFeeling = ["happy", "sad", "grossed out", "surprise", "fear", "anger", "cold", "thirsty", "hungry", "awkward", "annoyed", "shy", "peaceful", "energetic", "bored", "winning", "powerful", "exhausted", "nervous"];
	$("#generator").click(function(){
		var feeling = randomFeeling[Math.floor(Math.random() * randomFeeling.length)];
		$("#feeling").text(feeling); 
	});
});