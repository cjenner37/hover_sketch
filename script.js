$(document).ready(function(){
	for (x = 0; x < 16; x++){
		for (y = 0; y < 16; y++){
			var unit = $("<div class='unit'></div>");
			unit.appendTo('#container');
		}
	}
	$('.unit').hover(function(){
		$(this).css("background-color","#a0a0a0");
	});
	$('#clear').click(function() {
		$('.unit').css("background-color","white");
	});
});