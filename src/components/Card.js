function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 
  
  return(
    <div className="photos__card">
            <img src={props.card.link} alt="Фотография" className="photos__illustration" onClick={handleClick}/>
            <button className="photos__delete-button" type="button"></button>
            <div className="photos__wrap">
              <h2 className="photos__title">{props.card.name}</h2>
              <div className="photos__like-wrap">
                <button className="photos__like-button" type="button"></button>
                <p className="photos__like-counter">{props.card.likes.length}</p>
              </div>
            </div>
          </div>
  )
}

export default Card;