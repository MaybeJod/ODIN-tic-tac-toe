const GameBoard = (function() {

    let board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    //check wins 
    function checkWin() {
        // All possible winning combinations: rows, columns, and diagonals.
        const winningCombinations = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],  // Rows
            [1, 4, 7], [2, 5, 8], [3, 6, 9],  // Columns
            [1, 5, 9], [3, 5, 7]              // Diagonals
        ];
    
        // Loop through all winning combinations.
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            // Get the values at the positions defined by the current combination.
            const valueA = getValue(a);
            const valueB = getValue(b);
            const valueC = getValue(c);
    
            // If all three positions have the same value (either 'X' or 'O'), declare the winner.
            if (valueA === valueB && valueB === valueC && (valueA === 'X' || valueA === 'O')) {
                return valueA; // Return the winning symbol ('X' or 'O').
            }
        }
    
        // If the board is full and no one has won, it's a tie.
        if (isBoardFull()) {
            return 'tie';
        }
    
        // No winner or tie yet, game continues.
        return null;
    }

    // Helper function to check if all cells are filled (i.e., no more moves possible).
    function isBoardFull() {
        // Loop through all cells of the board.
        for (let row of gameBoard) {
            for (let cell of row) {
                // If any cell still contains a number, the board is not full.
                if (typeof cell === 'number') {
                    return false;
                }
            }
        }
        // All cells are filled, so the board is full.
        return true;
    }


    //reset board
    function resetBoard() {
        board = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
    }

    //render board
    function render() {
        console.log(board[0].join(" | "));
        console.log(board[1].join(" | "));
        console.log(board[2].join(" | "));
        console.log("\n");
    }

    return { checkWin, resetBoard, render }

})();

GameBoard.render();


const GameController = (function() {

    function createPlayer(name, marker) {
        this.name = name;
        this.marker = marker;
        
        return {name, marker, }
    }
    

    return { createPlayer }
})();

// ttt 
// need a gameboard IIFE
// create divs with the board 
// game logic
//