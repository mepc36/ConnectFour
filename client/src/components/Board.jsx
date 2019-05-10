import React, { Component } from 'react'
import Square from './Square.jsx'
import Row from './Row.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props);
    // 0 = red ---> Player 1
    // 1 = black ---> Player 2
    // 2 = blank ---> EMPTY SQUARE!
    this.state = {
      currentBoard: [
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2]
      ],
      player1Turn: true,
      gameWon: false
    }
  }

  squareClicked (xCoord, yCoord) {
    if (this.state.gameWon === true) {
      console.log('Start a new game!');
      return
    }
    var nextBoard = this.state.currentBoard;
    var nextTurn = this.state.player1Turn;

    var i = xCoord;

    if (nextBoard[xCoord][yCoord] === 0 || nextBoard[xCoord][yCoord] === 1) {
      console.log('Try another square!')
      return;
    }

    while (i < 6) {
      if ( i === 5 && nextBoard[i][yCoord] === 2) {
        if (nextTurn === true) {
          nextBoard[i][yCoord] = 0;
          nextTurn = false;
          this.setState({
            player1Turn: nextTurn
          });
          this.checkRows(nextBoard);
          this.checkColumns(nextBoard, yCoord);
          this.checkMajorDiagonals(nextBoard);
          return;
        } else {
          nextBoard[i][yCoord] = 1;
          nextTurn = true;
          this.setState({
            player1Turn: nextTurn
          });
          this.checkRows(nextBoard);
          this.checkColumns(nextBoard, yCoord);
          this.checkMajorDiagonals(nextBoard);
          return;
        }
      } else {
        if (nextBoard[i][yCoord] === 0 || nextBoard[i][yCoord] === 1) {
          if (nextTurn === true) {
            nextBoard[i - 1][yCoord] = 0;
            nextTurn = false;
            this.setState({
              player1Turn: nextTurn
            });
            this.checkRows(nextBoard);
            this.checkColumns(nextBoard, yCoord);
            this.checkMajorDiagonals(nextBoard);
            return;
          } else {
            nextBoard[i - 1][yCoord] = 1;
            nextTurn = true;
            this.setState({
              player1Turn: nextTurn
            });
            this.checkRows(nextBoard);
            this.checkColumns(nextBoard, yCoord);
            this.checkMajorDiagonals(nextBoard);
            return;
          }
        }
      }
      i++;
    }
  }

  checkRows(board) {
    var inARow = 0;

    for (var i = 0; i < board.length; i++) {
      for (var k = 0; k < board[i].length; k++) {
        if (board[i][k] === 0 && this.state.player1Turn === true) {
          inARow += 1;
          if (inARow === 4) {
            debugger;
            console.log('Congrats, Player 1 wins on a row!');
            this.state.gameWon = true;
            return true;
          }
        }
        else if (board[i][k] === 1 && this.state.player1Turn === false) {
          inARow += 1;
          if (inARow === 4) {
            console.log('Congrats, Player 2 wins on a row!');
            this.state.gameWon = true;
            return true;
          }
        } else {
          inARow = 0;
        }
      }
    }
    inARow = 0;
    return false;
  }

  checkColumns(board, column) {
    var inARow = 0;
    
    for (var i = 0; i < board.length; i++) {
      if (board[i][column] === 0 && this.state.player1Turn === true) {
        inARow += 1;
        if (inARow === 4) {
          console.log('Congrats, Player 1 wins on a column!');
          this.state.gameWon = true;
          return true;
        }
      }
      else if (board[i][column] === 1 && this.state.player1Turn === false) {
        inARow += 1;
        if (inARow === 4) {
          console.log('Congrats, Player 2 wins on a column!');
          this.state.gameWon = true;
          return true;
        }
      } else {
        inARow = 0;
      }
    }
    inARow = 0;
    return false;
  }

  checkMajorDiagonals(board) {
    var inARow = 0;
    var k = 0;

    while (k < board.length) {
      for (var i = 0; i < board.length; i++) {
        if (board[i][k] === 0 && this.state.player1Turn === true) {
          inARow += 1;
          if (inARow === 4) {
            console.log('Congrats, Player 1 wins on a diagonal!');
            this.state.gameWon = true;
            return true;
          }
        } else if (board[i][k] === 1 && this.state.player1Turn === false) {
          inARow += 1;
          if (inARow === 4) {
            console.log('Congrats, Player 2 wins on a diagonal!');
            this.state.gameWon = true;
            return true;
          }
        } else {
          inARow = 0;
        }
        k++;
      }
    }

    inARow = 0;
    var j = 0;

    k = 1;
    var x = 0;
    var inARow = 0;
    for (var x = 0; x < 4; x++) {
      k = 0 + x;
      while (k < board.length) {
        for (var i = 0; i < board.length ; i++) {
          if (k < board.length + 1) {
            if (board[i][k] === 0 && this.state.player1Turn === true) {
              inARow += 1;
              if (inARow === 4) {
                console.log('Congrats, Player 1 wins on a diagonal!');
                this.state.gameWon = true;
                return true;
              }
            } else if (board[i][k] === 1 && this.state.player1Turn === false) {
              inARow += 1;
              if (inARow === 4) {
                console.log('Congrats, Player 2 wins on a diagonal!');
                this.state.gameWon = true;
                return true;
              }
            } else {
              inARow = 0;
            }
          } else {
            continue;
          }
          k++
        }
      }
    }

    k = 0;
    x = 2;
    i = 2;
    j = 2;
    inARow = 0;
  
    for (var x = 0; x < 4; x++) {
      if (j === 0) {
        break;
      }
      k = 0 + x;
      while (k < board.length) {
        for (var i = 0; i < board.length; i++) {
          if (j > 0) {
            if (k < board.length) {
              if (board[k][i] === 0 && this.state.player1Turn === true) {
                inARow += 1;
                if (inARow === 4) {
                  console.log('Congratulations, Player 1 wins on a lower diagonal!');
                  this.state.gameWon = true;
                  return;
                }
              } else if (board[k][i] === 1 && this.state.player2Turn === false) {
                inARow += 1;
                if (inARow === 4) {
                  console.log('Congratulations, Player 2 wins on a lower diagonal!');
                  this.state.gameWon = true;
                  return;
                }
              } else {
                inARow = 0;
              }
            } else {
              j--
              continue;
            }
            k++
          } else {
            break;
          }
        }
        if (j === 0) {
          break;
        }
        break;
      }
    }
    inARow = 0;
    return false;
  }

  render() {
    return (
    <table border="1">
      <tbody>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={0} board={this.state.currentBoard}/>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={1} board={this.state.currentBoard}/>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={2} board={this.state.currentBoard}/>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={3} board={this.state.currentBoard}/>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={4} board={this.state.currentBoard}/>
        <Row squareClicked={this.squareClicked.bind(this)} xCoord={5} board={this.state.currentBoard}/>
      </tbody>
    </table>
    )
  }

}

export default Board