// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isGameOver, imgUrl, wonOrLoseText, score, onPlayAgain} = props

  const clickingPlayAgain = () => {
    onPlayAgain()
  }

  return (
    isGameOver && (
      <div className="game-over-card-container">
        <img src={imgUrl} alt="win or lose" className="balloon-img-size" />
        <h1>You {wonOrLoseText}</h1>
        <p>Best Score</p>
        <p className="score-num">{score}/12</p>

        <button type="button" className="play-again-btn" onClick={clickingPlayAgain}>
          Play Again
        </button>
      </div>
    )
  )
}

export default WinOrLoseCard
