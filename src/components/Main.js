import { useContext} from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

  

  const userInfo = useContext(CurrentUserContext);

  


 
  
  return(
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={userInfo.avatar} alt="Аватар" className="profile__avatar"/>
        <div className="profile__button-overlay">
           <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
         <div className="profile__wrap">
            <h1 className="profile__title">{userInfo.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button> 
          </div>
            <p className="profile__subtitle">{userInfo.about}</p>
       </div>
       <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      
      <section className="photos">
      {props.cards.map(card => <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />)}
      </section>
    </main>
</>
  )
}

export default Main;