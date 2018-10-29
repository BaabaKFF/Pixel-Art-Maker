$(document).ready(function() {
  
const finalGrid = $('#table');
  
//function to make the grid
function makeGrid(){
  
   // put height and width in varibles
   const gridHeight = $('#inputHeight').val();
   const gridWidth = $('#inputWidth').val();
  
  //clear previous table if exist
  $('table tr').remove();
  
  //build the grid using for loops
  for (let row= 0; row <gridHeight; row++){ 
   finalGrid.append('<tr></tr>');
    }
  for (let col=0; col<gridWidth; col++){
  $('tr').append('<td></td>');
  }
    finalGrid.css('background-color', 'white');
  }
  
 //execute grid when submit click event 
  $('#form').submit(function(e){
  makeGrid();
  e.preventDefault();               
  });
 
  //clean screen when clean click event
  $('#clear').click(function(){
    $('table').empty('td');   
  });  
  
  //add color to selected td on click
  finalGrid.on('click', 'td', function(){
	const color = $('#color').val();
    $(this).css('background-color', color);
  });
  
  //remove color from selected td on double click
  finalGrid.on('dblclick', 'td', function(){
    $(this).css('background-color', 'white');
  });
  
  //click and drag color on mousedown and mouseover
  finalGrid.on('mousedown mouseover', 'td', function(event) {
		if (event.buttons===1) {
			$(this).css('background-color', $('#color').val());
		}
  });   
    
});