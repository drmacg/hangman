import React, { PureComponent } from 'react'

class Game extends PureComponent {
  render() {
    return (
      <h1>{ this.props.word }</h1>
    )
  }
}

export default Game
