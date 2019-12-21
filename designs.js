// The function is called by the submit_form() function, it creates a dynamic grid according to height and width given by the user , then it allows him to color each cell with a color of his choice
function makeGrid() {
    
    // getting the table to be added
    var canvas = document.getElementById("pixelCanvas");
    
    // getting the width input from user
    var cols = document.getElementById("inputWidth").value ;
    
    // getting the height input from user
    var rows = document.getElementById("inputHeight").value;
    
    // adding rows and cells to the grid
    for (var i=0; i<rows;i++){ 
        var tr = document.createElement('tr');
        canvas.appendChild(tr);
        
        for(var j=0;j<cols;j++){
            var td = document.createElement('td');
            tr.appendChild(td);
            // coloring the cells according to user click
            canvas.addEventListener('mousedown', function(e) {
                // getting users color input
                var pickColor = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = pickColor; });
         } 
     }
}


// The function is called with clicking on the submit button ,it checks if there's already a grid and removes it to start a new one 
function submit_form() {
    // getting the table to be added
    var canvas = document.getElementById("pixelCanvas");
    // removing any existing childs of the table
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
  }
// making a new grid    
makeGrid();

};
