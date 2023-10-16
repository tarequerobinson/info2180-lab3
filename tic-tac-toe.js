document.addEventListener('DOMContentLoaded', function () {
    // Function to add the appropriate class to each square
    function styleGameBoard() {
      // Get the board div
      var board = document.getElementById('board');
  
      // Get all child divs within the board div
      var squares = board.getElementsByTagName('div');
  
      // Loop through each square and add the 'square' class
      for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
      }
    }
  
    // Call the function when the page loads
    styleGameBoard();
  });
  