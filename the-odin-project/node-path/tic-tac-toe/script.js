function boardStuff() {
  // set up the board (getBoard, addMarker, displayBoard)
  const columns = 3;
  const rows = 3;
  const board = [];

  // build the grid
  for (let row = 0; row < 3; row++) {
    board[row] = [];
    for (let col = 0; col < 3; col++) {
      board[row].push(null);
    }
  }

  // get the state of the board to render
  const getBoard = () => board;

  const addMarker = (row, column, marker) => {
    if (board[row][column] !== null) {
      // alert("you mmmust pick an empty cell");
      return;
    }
    board[row][column] = marker;
  };

  const displayBoard = () => {
    console.table(board);
  };

  const resetBoard = () => {
    for (let row = 0; row < 3; row++) {
      board[row] = [];
      for (let col = 0; col < 3; col++) {
        board[row].push(null);
      }
    }
  };

  return { getBoard, addMarker, displayBoard, resetBoard };
}

function gameControl(playerOneName = "Player 1", playerTwoName = "Player 2") {
  const board = boardStuff();
  let roundCount = 0;
  let winner = false;

  // array of players
  const players = [
    {
      name: playerOneName,
      marker: "X",
    },
    {
      name: playerTwoName,
      marker: "O",
    },
  ];

  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer =
      activePlayer.name === playerOneName ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const displayNewRound = () => {
    board.displayBoard();
  };

  const playRound = (row, column) => {
    roundCount += 1;
    console.log(
      `${getActivePlayer().name} chooses row ${row}, column ${column}`
    );
    board.addMarker(row, column, getActivePlayer().marker);

    const button = document.getElementById(`${row}${column}`);
    button.textContent = getActivePlayer().marker;

    gameInfoDiv.innerHTML += `<h2>round ${roundCount}:</h2>
    </p>${getActivePlayer().name} chooses row ${row + 1}, column ${
      column + 1
    }</p>`;

    setTimeout(() => {
      // requestAnimationFrame(() => {
      checkWinnerOrTie();
      disableButtons();
      displayNewRound();
      switchPlayerTurn();
      // });
    }, 1);
  };

  const checkWinnerOrTie = () => {
    // winner check logic
    // check if 3 are same across a row
    for (let row = 0; row < 3; row++) {
      // use Set() to check if all entries in a row are equal
      let rowSetArray = [...new Set(board.getBoard()[row])];
      if (rowSetArray.length === 1 && rowSetArray[0] !== null) {
        alert("winner row");
        winner = true;
        return;
      }
    }

    // now check if all entries down a col are equal
    for (let col = 0; col < 3; col++) {
      let colSetArray = [
        ...new Set([
          board.getBoard()[0][col],
          board.getBoard()[1][col],
          board.getBoard()[2][col],
        ]),
      ];

      if (colSetArray.length === 1 && colSetArray[0] !== null) {
        alert("winner column");
        winner = true;
        return;
      }
    }

    // check diagonals (bottom left to top right)
    let diagSetArray = [
      ...new Set([
        board.getBoard()[0][0],
        board.getBoard()[1][1],
        board.getBoard()[2][2],
      ]),
    ];

    if (diagSetArray.length === 1 && diagSetArray[0] !== null) {
      alert("winner diag");
      winner = true;
      return;
    }

    // check diagonals (top left to bottom right)
    diagSetArray = [
      ...new Set([
        board.getBoard()[2][0],
        board.getBoard()[1][1],
        board.getBoard()[0][2],
      ]),
    ];

    if (diagSetArray.length === 1 && diagSetArray[0] !== null) {
      alert("winner other diag");
      winner = true;

      return;
    }

    // if no winners, but there are no nulls, it's a tie
    let flattenedSetArray = [...new Set(board.getBoard().flat())];
    if (!flattenedSetArray.includes(null)) {
      alert("tie");
      return;
    }
  };

  const buttonArray = [...document.querySelectorAll(".button")];
  const gameInfoDiv = document.querySelector(".game-info");

  const disableButtons = () => {
    if (roundCount === 9 || winner) {
      buttonArray.map((button) => (button.disabled = true));
    }
  };

  const resetGame = () => {
    roundCount = 0;
    buttonArray.map((button) => {
      button.textContent = "";
    });
    gameInfoDiv.innerHTML = "";
    board.resetBoard();
    buttonArray.map((button) => (button.disabled = false));
    winner = false;
  };

  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => resetGame());

  // when you click a button, you play that game.playRound()
  buttonArray.map((button) => {
    button.addEventListener("click", () => {
      let buttonId = button.id;

      if (board.getBoard()[Number(buttonId[0])][Number(buttonId[1])] !== null) {
        alert("you must pick an empty cell");
        return;
      } else {
        game.playRound(Number(buttonId[0]), Number(buttonId[1]));
      }
      // }
    });
  });

  return {
    playRound,
    // getActivePlayer,
  };
}

const game = gameControl();

// col winner
// game.playRound(0, 0);
// game.playRound(1, 2);
// game.playRound(1, 0);
// game.playRound(1, 1);
// game.playRound(2, 0);

// row winner
// game.playRound(0, 0);
// game.playRound(1, 2);
// game.playRound(0, 1);
// game.playRound(1, 1);
// game.playRound(0, 2);

// diag
// game.playRound(0, 0);
// game.playRound(1, 2);
// game.playRound(1, 1);
// game.playRound(0, 1);
// game.playRound(2, 2);

// tie
// game.playRound(1, 2);
// game.playRound(2, 0);
// game.playRound(0, 1);
// game.playRound(2, 1);
// game.playRound(0, 0);
// game.playRound(0, 2);
// game.playRound(2, 2);
// game.playRound(1, 0);
// game.playRound(1, 1);

// console.log("hello")
// const divElement = document.querySelector('div')
// divElement.innerText = 'hihihihi'
