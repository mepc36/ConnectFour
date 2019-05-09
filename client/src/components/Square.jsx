import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.board[this.props.xCoord][this.props.yCoord] === 0) {
      var style = {
        backgroundColor: 'red'
      }
    } 
    if (this.props.board[this.props.xCoord][this.props.yCoord] === 1) {
      var style = {
        backgroundColor: 'black'
      }
    }
    if (this.props.board[this.props.xCoord][this.props.yCoord] === 2) {
      var style = {
        
      }
    }
    return (
      <th style={style} height="60px" width="60px" onClick={() => this.props.squareClicked(this.props.xCoord, this.props.yCoord)}> </th>
    )
  }
}

export default Square;