// Users will enter a height, width and color to create a blank table 
//on which they will color selected cells.
let newcolor = '#000';
let canvas = $('#pixelCanvas');

//Creating the function makeGrid to make the blank canvas.
function makeGrid(height, width) {
	for (i = 0; i < height; i++) {
		$(canvas).append($("<tr></tr>"));
			for (j = 0; j < width; j++) {
			$('tr').last().append($("<td></td>"));
			}
	}
}

//Upon the user entering the height and width, the function
//makeGrid() is called.
$('#bSubmit').on('click', function(event) {
	event.preventDefault();
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();
	$(canvas).empty();
	console.log("makeGrid is about to be called");
	makeGrid(height, width);
});

//Upon a user choosing a color, the hex value is returned into
//the variable color.
$('#colorPicker').change(function(){
	newcolor = $(this).val();
	console.log("The chosen color is " + newcolor);
});

//Creating the function colorCell to paint the chosen cell.
function colorCell(element) {
	var td = $(element.target);
	td.css("background", newcolor);
}

//The colorCell function is called when a user clicks on
//a cell(td).
$(canvas).on("click","td", function(e) {
	colorCell(e);
});

//Removing the canvas when Clear Canvas is clicked.
$('#bClearCanvas').on("click", function() {
	$(canvas).remove();
});

