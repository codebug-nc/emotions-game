$(document).ready(function(){
	var randomEmotions = ["happy", "sad", "disgust", "surprise", "fear", "anger", "guilt"];
	$("#generator").click(function(){
		var emotion = randomEmotions[Math.floor(Math.random() * randomEmotions.length)];
		$("#emotion").text(emotion); 
	});
});