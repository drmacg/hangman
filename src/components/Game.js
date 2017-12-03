import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.game.wordToShow }</h1>
        { this.props.game.isWinner ? <h1>Winner</h1> : null }
        { this.props.game.gameOver ? <h1>Game over!</h1> : null }
        <span>Number of mistakes: { this.props.game.wrongGuessCount} / 6</span>
      </div>
    )
  }
}

const mapStateToProps = ({game}) => ({
  game
})

export default connect(mapStateToProps)(Game)
