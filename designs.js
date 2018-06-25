// Select color input
// color = $('#colorPicker').val();
// Select size input
 

// When size is submitted by the user, call makeGrid()

// $('input').submit(function makeGrid(){
// 	for (var i = 1; i <= height; i++){
// 		$('table').append('<tr></tr>');
// 		for (var j = 1; j <= weight;j++){
// 			$('tr:last').append('<td></td>'); 
// 		}
// 	}
// }) 



$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid){
		var height = $('#inputHeight').val();
 		var weight = $('#inputWeight').val();
	for (var i = 1; i <= height; i++){
		$('table').append('<tr>')
		for (var j = 1; j <= weight; j++){
			$('tr:last').append('<td class="cells"></td>'); 
		}
	  }
	  grid.preventDefault();

	  $('.cells').click(function(event){
	  	var color = $('#colorPicker').val();
	  	$(event.target).css('background-color',color)
	  })
   })
})