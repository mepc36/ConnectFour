import React, { Component } from 'react'
import Square from './Square.jsx'
import Row from './Row.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props);
    // 0 = red ---> Player 1
    // 1 = black ---> Player 2
    // 2 = blank
    this.state = {
      currentBoard: [
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2]
      ],
      player1Turn: true
    }
  }

  // squareClicked (xCoord, yCoord) {
  //   console.log(`Click: ${xCoord}, ${yCoord}`);
  //   var nextBoard = this.state.currentBoard;
  //   var nextTurn = this.state.player1Turn;
  //   if (nextBoard[xCoord][yCoord] === 1 || nextBoard[xCoord][yCoord] === 0) {
  //     console.log('Try another square!');
  //   } else {
  //     if (nextTurn === true) {
  //       nextBoard[xCoord][yCoord] = 0;
  //       nextTurn = false;
  //     } else {
  //       nextBoard[xCoord][yCoord] = 1;
  //       nextTurn = true;
  //     }
  //     this.setState({
  //       currentBoard: nextBoard,
  //       player1Turn: nextTurn
  //     })
  //   }
  //   // Check for solutions
  //   // Make the piece gravitate to the lowest square
  // }


  // When this.state.player1Turn or nextTurn === true, it's player 1's turn, who is playing red, and whose number is 0;
  // When this.state.player1Turn or nextTurn === false, it's player 2's turn, who is playing black, and whose number is 1;
  squareClicked (xCoord, yCoord) {
    console.log(`Click: ${xCoord}, ${yCoord}`);

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
          debugger;
          this.setState({
            player1Turn: nextTurn
          });
          return;
        } else {
          nextBoard[i][yCoord] = 1;
          nextTurn = true;
          debugger;
          this.setState({
            player1Turn: nextTurn
          });
          return;
        }
      } else {
        if (nextBoard[i][yCoord] === 0 || nextBoard[i][yCoord] === 1) {
          if (nextTurn === true) {
            nextBoard[i - 1][yCoord] = 0;
            nextTurn = false;
            debugger;
            this.setState({
              player1Turn: nextTurn
            });
            return;
          } else {
            nextBoard[i - 1][yCoord] = 1;
            nextTurn = true;
            debugger;
            this.setState({
              player1Turn: nextTurn
            });
            return;
          }
        }
      }
      i++;
    }
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