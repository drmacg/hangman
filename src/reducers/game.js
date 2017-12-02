import { GUESS_LETTER } from '../actions/game/guess'

const game = {
  word: "Redux"
}

export default (state = game, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
     console.log(payload)
     return state

     default :
        return state

  }
}
