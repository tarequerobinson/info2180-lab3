document.addEventListener('DOMContentLoaded', function () {

// I initialize all the globally used variables and arrays outside the functions
      // Get the board div
      var board = document.getElementById('board');
      console.log(board);
  
      // Get all child divs within the board div
      var squares = board.getElementsByTagName('div');
      console.log(squares);

      var gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];






    // Function to add the appropriate class to each square
    function styleGameBoard() {
  
      // Loop through each square and add the 'square' class
      for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
      }
    }

  
    

    var currentPlayer = 'X'; // Initialize the current player

      // Function to handle square click
  function handleSquareClick(event) {

    // store the element which the event is targeted at  inside this variable 
    var clickedSquare = event.target;


    //   console.log(gameBoard);
      var index = Array.prototype.indexOf.call(squares, clickedSquare);
      var row = Math.floor(index / 3);
      var col = index % 3;
    
      console.log(index);
      console.log(row);
      console.log(col);









    // Check if the clicked square is empty
    if (!clickedSquare.classList.contains('X') && !clickedSquare.classList.contains('O')) {
      // Set the innerHTML to the current player (X or O)
      clickedSquare.innerHTML = currentPlayer;

    //   add the x or 0 to the array list


      // Add the class for styling (X or O)
      clickedSquare.classList.add(currentPlayer);
      gameBoard[row][col] = currentPlayer;
      console.log(gameBoard);


      winners();

      // Switch to the other player for the next turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    }
  }

  // Function to add click event listeners to all squares
  function addClickListeners() {
    var squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', handleSquareClick);
    }
  }

    function checkHorizontalWin() {
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
                return true; // There is a horizontal win
            }
        }
        return false; // No horizontal win
    }

    function checkVerticalWin() {
        for (var j = 0; j < gameBoard[0].length; j++) {
            if (gameBoard[0][j] !== '' && gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
                return true; // There is a vertical win
            }
        }
        return false; // No vertical win
    }

    function checkDiagonalWin() {
        if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
            return true; // There is a diagonal win from top-left to bottom-right
        }
        if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
            return true; // There is a diagonal win from top-right to bottom-left
        }
        return false; // No diagonal win
    }
    


    


    
    function winners() {
        if (checkHorizontalWin() || checkVerticalWin() || checkDiagonalWin()) {
            console.log("We have a winner!");
        } else {
            console.log("No winner yet.");
        }
    }
    



  
    // Call the function when the page loads
    styleGameBoard();
    addClickListeners();

  });
  