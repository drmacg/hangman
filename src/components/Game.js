import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Loser from '../images/loser.jpg'
import Winner from '../images/winner.png'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.game.wordToShow }</h1>
        { this.props.game.isWinner ? <h1><img class="winner" src={Winner} alt="winer" /></h1> : null }
        { this.props.game.gameOver ? <h1><img class="loser" src={Loser} alt="loser" /></h1>: null }
        <span>Number of mistakes: { this.props.game.wrongGuessCount} / 6</span>
      </div>
    )
  }
}

const mapStateToProps = ({game}) => ({
  game
})

export default connect(mapStateToProps)(Game)
