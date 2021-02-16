import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {useContext} from 'react'

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  const userInfo = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === userInfo._id;
  const cardDeleteButtonClassName = `photos__delete-button ${!isOwn && 'photos__delete-button_inactive'}`;
  const isLiked = props.card.likes.some(item => item._id === userInfo._id);
  const cardLikeButtonClassName = `photos__like-button ${isLiked && 'photos__like-button_active'}`;

  return(
    <div className="photos__card">
            <img src={props.card.link} alt="Фотография" className="photos__illustration" onClick={handleClick}/>
            <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
            <div className="photos__wrap">
              <h2 className="photos__title">{props.card.name}</h2>
              <div className="photos__like-wrap">
                <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                <p className="photos__like-counter">{props.card.likes.length}</p>
              </div>
            </div>
          </div>
  )
}

export default Card;