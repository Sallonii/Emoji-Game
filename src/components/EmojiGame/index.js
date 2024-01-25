/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {activeImgUrl: '', score: 0, topScore: 0, isGameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickImg = emojiUrl => {
    const {activeImgUrl, score} = this.state

    if (emojiUrl !== activeImgUrl) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isGameOver: true})
    }

    if (score === 11) {
      this.setState({isGameOver: true})
    }

    this.setState({activeImgUrl: emojiUrl})
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({topScore: score})
    }

    this.setState({score: 0, isGameOver: false})
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const shuffledList = this.shuffledEmojisList()

    const imgUrl =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    const wonOrLoseText = score === 12 ? 'Won' : 'Lose'

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="content-container">
          {!isGameOver && (
            <div className="emoji-card-cont">
              <ul className="emoji-ul-cont">
                {shuffledList.map(eachItem => (
                  <EmojiCard
                    emojiDetails={eachItem}
                    key={eachItem.id}
                    clickImg={this.clickImg}
                  />
                ))}
              </ul>
            </div>
          )}
          <WinOrLoseCard
            isGameOver={isGameOver}
            imgUrl={imgUrl}
            wonOrLoseText={wonOrLoseText}
            score={score}
            onPlayAgain={this.onPlayAgain}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
