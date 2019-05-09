import React from 'react';
import Square from './Square.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <tr>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={0} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={1} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={2} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={3} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={4} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={5} board={this.props.board}/>
        <Square squareClicked={this.props.squareClicked} xCoord={this.props.xCoord} yCoord={6} board={this.props.board}/>
      </tr>
    )
  }
}

export default Row;