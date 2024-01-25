// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  const NotDisplay = isGameOver ? 'd-none' : ''

  console.log(NotDisplay)

  return (
    <nav className="nav-container">
      <div className="score-ul-cont">
        <h1>Emoji Game</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
      </div>
      <ul className="score-ul-cont">
        <li className={`score-li-cont ${NotDisplay}`}>
          <p>Score: {score}</p>
        </li>
        <li className={`score-li-cont ${NotDisplay}`}>
          <p>Top Score: {topScore}</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
