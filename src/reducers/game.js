import { GUESS_LETTER } from '../actions/game/guess'

var word = "redux"
var guesses = []

const game = {
  word: word,
  guesses: guesses,
  wordToShow: showGuess(word, guesses),
  wrongGuessCount: 0,
  isWinner: false,
  gameOver: false,
}

export default (state = game, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
      var newState = Object.assign({}, state)
      newState.guesses.push(payload)
      newState.wordToShow = showGuess(newState.word, newState.guesses)
      newState.wrongGuessCount = wrongGuessCount(newState.word, newState.guesses)
      newState.isWinner = isWinner(newState.word, newState.guesses)
      newState.gameOver = newState.wrongGuessCount === 6

      state = newState
     default :
        return state
  }
}

function wrongGuessCount(word, guesses) {
  return guesses.filter(el => word.indexOf(el) === -1).length
}

function showGuess(word, guesses) {
  var letters = word.split("")
  var mappedLetters = letters.map(el => {
    if (guesses.indexOf(el) === -1){
      return "_"
    }
    else {
      return el
    }
  })
  return mappedLetters.join(" ")
}

function isWinner(word, guesses) {
  var letters = word.split("")
  var filteredLetters = letters.filter(el => guesses.indexOf(el) !== -1)
  return letters.length === filteredLetters.length
}
