var generateDiagonals = function(board) {
  debugger;
  var k = 0;
  while(k < board.length) {
    for (var i = 1; j < board.length; i++) {
      for (var j = 0; j < board.length; i++) {
        debugger;
      }
    }
    k++;
  }
}

var testBoard = [
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2]
],

var result = generateDiagonals(testBoard);