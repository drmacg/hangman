import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guessGame from '../actions/game/guess'

class Guess extends PureComponent {
  constructor(props) {
    super()
  }

  updateLetter() {
    this.setState({
      letter: this.refs.letter.value
    })
  }

  guess() {
    this.props.guessGame(this.state.letter)
    this.refs.letter.value = ""
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="letter"
          className="title"
          placeholder="Letter"
          defaultValue=""
          onChange={this.updateLetter.bind(this)}
          />

        <div className="actions">
          <button className="primary" onClick={this.guess.bind(this)}>Guess</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { guessGame })(Guess)
