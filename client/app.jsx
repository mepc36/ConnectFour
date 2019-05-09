import React, { Component } from 'react'
import Board from './src/components/Board.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h3>App:</h3>
            <Board />
      </div>
    )
  }
  
}

export default App