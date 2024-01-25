// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickImg} = props
  const {emojiName, emojiUrl} = emojiDetails

  const onClickingImg = () => {
    clickImg(emojiUrl)
  }

  return (
    <li className="list-items-cont" onClick={onClickingImg}>
      <button type="button" className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
