const GameBoard = (function() {

    let board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    //check wins 
    function CheckWin() {

        const winCombos = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],  // Rows
            [1, 4, 7], [2, 5, 8], [3, 6, 9],  // Columns
            [1, 5, 9], [3, 5, 7]              // Diagonals
        ];

         // Check each winning combination
        for (let combo of winCombos) {
            let [a, b, c] = combo;
            
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            
                return board[a]; // Return the winning symbol (X or O)
            }
        }

        return null; // No winner
    }
    //check ties


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

    return { CheckWin, resetBoard, render }

})();

GameBoard.render();


const GameController = (function() {

    function createPlayer(name, marker) {
        this.name = name;
        this.marker = marker;
        this.printPlayerInfo = function() {
            console.log(`${this.name} is playing as the: ${this.marker}`)
        }
        return {name, marker, printPlayerInfo}
    }

    return { createPlayer }
})();


// ttt 
// need a gameboard IIFE
// create divs with the board 
// game logic