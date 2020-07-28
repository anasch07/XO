var combinations;
var turn;
var cellsFilled;
var selected;
var cellContent;
var imageX;
var imageO;
var startGame;

$(function() {
    combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    selected = [false, false, false, false, false, false, false, false, false];
    content = new Array();
    turn = 0;
    cellsFilled = 0;
    imageX = "url(img/X.svg)";
    imageO = "url(img/O.svg)";
    startGame = false;
    $('.overlay-content>button').click(function() {
        if (startGame)
            location.reload();
        else {
            startGame = true;
            $('.overlay').hide();
        }
    })
});

function userClick(cellNumber) {
    if (startGame) {
        if (selected[cellNumber] == false) {
            $(".cell#cell_" + cellNumber).find("div").css("background-image", (turn % 2 == 0 ? imageX : imageO));
            content[cellNumber] = (turn % 2 == 0 ? "X" : "O");
            turn++;
            cellsFilled++;
            selected[cellNumber] = true;
            var gameWon = checkWinner(content[cellNumber]);
            if (gameWon)
                displayWinner(content[cellNumber]);
            else if (!gameWon && cellsFilled == 9)
                displayDraw();
        }
    }
}

function checkWinner(player) {
    var winner = false;
    combinations.forEach(function(item) {
        if (content[item[0]] == player && content[item[1]] == player && content[item[2]] == player)
            winner = true;
    });
    return winner;
}

function displayDraw() {
    $(".overlay-content>h2").html("DRAW!");
    $(".overlay-content>button").html("RESTART GAME?");
    $(".overlay").show();
}

function displayWinner(winner) {
    $(".overlay-content>h2").html(winner + " WINS!");
    $(".overlay-content>button").html("RESTART GAME?");
    $(".overlay").show();
}