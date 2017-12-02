import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render() {
    return (
      <h1>{ this.props.game.word }</h1>
    )
  }
}

const mapStateToProps = ({game}) => ({
  game
})

export default connect(mapStateToProps)(Game)
