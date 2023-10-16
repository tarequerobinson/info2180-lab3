document.addEventListener('DOMContentLoaded', function () {

// I initialize all the globally used variables and arrays outside the functions
      // Get the board div
      var board = document.getElementById('board');
      console.log(board);

      var status = document.getElementById('status');
      console.log(status);


  
      // Get all child divs within the board div
      var squares = board.getElementsByTagName('div');
      console.log(squares);

      var newGameButtom = document.querySelector('button');
      console.log(newGameButtom);

      newGameButtom.onclick = function() {
        // for (var i = 0; i < squares.length; i++) {
        //     squares[i].innerHTML = '';
        //   }

        //   status.innerHTML = "Move your mouse over a square and click to play an X or an O.";

        //   gameBoard = [
        //     ['', '', ''],
        //     ['', '', ''],
        //     ['', '', '']
        //   ];

        //   addClickListeners();
        //   handleSquareClick();
    

        //   console.log("game reset");
        location.reload() 

        // alert("Button clicked!");
    };
    


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
        // squares[i].onmouseover = function(){squares[i].classList.add('hover')};
        // add the hover class to the targeted element where the event occurs 
        squares[i].addEventListener("mouseover", (event)=>{ event.target.classList.add('hover')});

                // Remove hover class on mouseout
        squares[i].addEventListener("mouseout", function (event) {
              event.target.classList.remove('hover');
            });
      

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
      
      
    //   status.innerHTML = checkHorizontalWin();




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
            if ((gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) && (gameBoard[i][2] == 'X') ) {
                return 'Congratulations! X is the Winner!'; // There is a horizontal win for player x 
            }
            else if ((gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) && (gameBoard[i][2] == 'O') ) {

                return 'Congratulations! O is the Winner!'; // There is a horizontal win for player x 


            }
        }
        return false; // No horizontal win
    }

    function checkVerticalWin() {
        for (var j = 0; j < gameBoard[0].length; j++) {
            if ((gameBoard[0][j] !== '' && gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) && (gameBoard[2][j] == 'O') ) {
                return 'Congratulations! O is the Winner!'; // There is a vertical win
            }
            else if ((gameBoard[0][j] !== '' && gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) && (gameBoard[2][j] == 'X') ){
                return 'Congratulations! X is the Winner!'; // There is a vertical win
            }

        }
        return false; // No vertical win
    }

    function checkDiagonalWin() {
      if ((gameBoard[2][0] !== '' && gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[0][2]) && (gameBoard[0][2] == 'X') ) {
        return 'Congratulations! X is the Winner!' ; // There is a diagonal win from top-left to bottom-right
    }
    else if ((gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) && (gameBoard[2][2] == 'O') ){
            return 'Congratulations! O is the Winner!'; // There is a diagonal win from top-right to bottom-left
        }
        return false; // No diagonal win
    }
    


    


    
    function winners() {
        if (checkHorizontalWin() != false ) {

            status.innerHTML = checkHorizontalWin();
            status.classList.add('you-won');


            


            // console.log("We have a winner!");
        } 
        else if (checkVerticalWin() != false) {
            status.innerHTML = checkVerticalWin();
            status.classList.add('you-won');

            // console.log("No winner yet.");
        }
        else if (checkDiagonalWin() != false) {
            status.innerHTML = checkDiagonalWin();
            status.classList.add('you-won');



            
        }

    }
    



  
    // Call the function when the page loads
    styleGameBoard();
    addClickListeners();

  });
  