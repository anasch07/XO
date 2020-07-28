$(document).ready(function() {
    $('.reset').click(function() {
        ticTacObj.reset();
    });

    $('.box').on('click', function(e) {
        if (ticTacObj.winner !== true && $(this).text() === "") {
            ticTacObj.toggle = 1;
            ticTacObj.counter++;
            $(this).text('X');
            ticTacObj.boardCheck();
            ticTacObj.winCheck(['X', 'O']);

            if (!ticTacObj.winner) {
                ticTacObj.compTurn();
                ticTacObj.toggle = 2;
            }
        };
    });

    var ticTacObj = {
        board: {
            a1: '',
            a2: '',
            a3: '',
            b1: '',
            b2: '',
            b3: '',
            c1: '',
            c2: '',
            c3: '',
        },
        counter: 0,
        winner: false,
        reset: function() {
            ticTacObj.counter = 0;
            $('.box').each(function(index) {
                $(this).text('')
                ticTacObj.board[$(this).attr('id')] = $(this).text('');
            });
            ticTacObj.winner = false;
            $('.announcement').hide();
        },
        winCheck: function(arr) {
            /*
            The some() method executes thef unction once
            for each element present in the array:
              If it finds an array element where the
              function returns a true value, some() returns true(and does not check the remaining values
            Otherwise it returns false
            */
            arr.some(function(element, i) {
                if ((this.board.a1 === element && this.board.a2 === element && this.board.a3 === element) ||
                    (this.board.a2 === element && this.board.b2 === element && this.board.c2 === element) ||
                    (this.board.a3 === element && this.board.b3 === element && this.board.c3 === element) ||
                    (this.board.a1 === element && this.board.b2 === element && this.board.c3 === element) ||
                    (this.board.b1 === element && this.board.b2 === element && this.board.b3 === element) ||
                    (this.board.c1 === element && this.board.c2 === element && this.board.c3 === element) ||
                    (this.board.a1 === element && this.board.b1 === element && this.board.c1 === element) ||
                    (this.board.a3 === element && this.board.b2 === element && this.board.c1 === element)) {
                    this.winner = true;
                    console.log(ticTacObj.winner);
                    $('.announcement').text(element + ' Wins!!');
                    $('.announcement').show();
                } else if ((ticTacObj.counter === 5) && (this.winner === false)) {
                    $('.announcement').text('Nobody Wins!!');
                    $('.announcement').show();
                }
            }, ticTacObj)
        },
        boardCheck: function() {
            $('.box').each(function(index) {
                ticTacObj.board[$(this).attr('id')] = $(this).text();

            });
        },
        compMove: function() {
            if (this.board.a1 === '' && ((this.board.a2 === 'O' && this.board.a3 === 'O') ||
                    (this.board.b1 === 'O' && this.board.c1 === 'O') ||
                    (this.board.b2 === 'O' && this.board.c3 === 'O'))) {
                $('#a1').text('O');
            } else if (this.board.a2 === '' && ((this.board.a1 === 'O' && this.board.a3 === 'O') ||
                    (this.board.b2 === 'O' && this.board.b2 === 'O'))) {
                $('#a2').text('O');
            } else if (this.board.a3 === '' && ((this.board.a2 === 'O' && this.board.a1 === 'O') ||
                    (this.board.b3 === 'O' && this.board.c3 === 'O') ||
                    (this.board.b2 === 'O' && this.board.c1 === 'O'))) {
                $('#a3').text('O');
            } else if (this.board.b1 === '' && ((this.board.b2 === 'O' && this.board.b3 === 'O') ||
                    (this.board.a1 === 'O' && this.board.c1 === 'O'))) {
                $('#b1').text('O');
            } else if (this.board.b2 === '' && ((this.board.b1 === 'O' && this.board.b3 === 'O') ||
                    (this.board.a1 === 'O' && this.board.c3 === 'O') ||
                    (this.board.a2 === 'O' && this.board.c2 === 'O') ||
                    (this.board.c1 === 'O' && this.board.a3 === 'O'))) {
                $('#b2').text('O');
            } else if (this.board.b3 === '' && ((this.board.b1 === 'O' && this.board.b2 === 'O') ||
                    (this.board.a3 === 'O' && this.board.c3 === 'O'))) {
                $('#b3').text('O');
            } else if (this.board.c1 === '' && ((this.board.c2 === 'O' && this.board.c3 === 'O') ||
                    (this.board.a1 === 'O' && this.board.b1 === 'O') ||
                    (this.board.b2 === 'O' && this.board.a3 === 'O'))) {
                $('#c1').text('O');
            } else if (this.board.c2 === '' && ((this.board.c1 === 'O' && this.board.c3 === 'O') ||
                    (this.board.a2 === 'O' && this.board.b2 === 'O'))) {
                $('#c2').text('O');
            } else if (this.board.c3 === '' && ((this.board.c2 === 'O' && this.board.c1 === 'O') ||
                    (this.board.a1 === 'O' && this.board.b2 === 'O') ||
                    (this.board.b3 === 'O' && this.board.a3 === 'O'))) {
                $('#c3').text('O');
            } else {
                ticTacObj.compBlock();
                // $('.box').each(function(index) {
                //   if($(this).text() === '') {
                //     $(this).text('O');
                //     return false;
                //   }
                // })
            }
        },
        compBlock: function() {
            if (((this.board.a3 === 'X' && this.board.a2 === 'X') ||
                    (this.board.b1 === 'X' && this.board.c1 === 'X') ||
                    (this.board.b2 === 'X' && this.board.c3 === 'X')) &&
                $('#a1').text() === '') {
                $('#a1').text('O');
            } else if (((this.board.a1 === 'X' && this.board.a3 === 'X') ||
                    (this.board.b2 === 'X' && this.board.c2 === 'X')) &&
                $('#a2').text() === '') {
                $('#a2').text('O');
            } else if (((this.board.a1 === 'X' && this.board.a2 === 'X') ||
                    (this.board.b2 === 'X' && this.board.c1 === 'X') ||
                    (this.board.b3 === 'X' && this.board.c3 === 'X')) &&
                $('#a3').text() === '') {
                $('#a3').text('O');
            } else if (((this.board.b2 === 'X' && this.board.b3 === 'X') ||
                    (this.board.a1 === 'X' && this.board.c1 === 'X')) &&
                $('#b1').text() === '') {
                $('#b1').text('O');
            } else if (((this.board.b1 === 'X' && this.board.b3 === 'X') ||
                    (this.board.a1 === 'X' && this.board.c3 === 'X') ||
                    (this.board.a2 === 'X' && this.board.c2 === 'X') ||
                    (this.board.a3 === 'X' && this.board.c1 === 'X')) &&
                $('#b2').text() === '') {
                $('#b2').text('O');
            } else if (((this.board.b1 === 'X' && this.board.b2 === 'X') ||
                    (this.board.a3 === 'X' && this.board.c3 === 'X')) &&
                $('#b3').text() === '') {
                $('#b3').text('O');
            } else if (((this.board.c3 === 'X' && this.board.a2 === 'X') ||
                    (this.board.b1 === 'X' && this.board.a1 === 'X') ||
                    (this.board.b2 === 'X' && this.board.a3 === 'X')) &&
                $('#c1').text() === '') {
                $('#c1').text('O');
            } else if (((this.board.c1 === 'X' && this.board.c3 === 'X') ||
                    (this.board.b2 === 'X' && this.board.a2 === 'X')) &&
                $('#c2').text() === '') {
                $('#c2').text('O');
            } else if (((this.board.c1 === 'X' && this.board.c2 === 'X') ||
                    (this.board.b3 === 'X' && this.board.a3 === 'X') ||
                    (this.board.b2 === 'X' && this.board.a1 === 'X')) &&
                $('#c3').text() === '') {
                $('#c3').text('O');
            } else {
                // ticTacObj.compMove();
                $('.box').each(function(index) {
                    if ($(this).text() === '') {
                        $(this).text('O');
                        //whereas false will act as a break. You will need to return false from the each function 
                        return false;
                    }
                })
            }
        },
        compTurn: function() {
            ticTacObj.compMove();
            ticTacObj.boardCheck();
            ticTacObj.winCheck(['X', 'O']);
        }
    };

});