import avatar from '../images/avatar.png';
import api from '../utils/Api';
import {useState, useEffect} from 'react';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfileInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) =>{
        console.log(`Error: ${err}`);
      })
  }, []);
  
  return(
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
        <div className="profile__button-overlay">
           <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
         <div className="profile__wrap">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button> 
          </div>
            <p className="profile__subtitle">{userDescription}</p>
       </div>
       <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      
      <section className="photos">
      {cards.map(card => <Card card={card} key={card._id} onCardClick={props.onCardClick} />)}
      </section>
    </main>
</>
  )
}

export default Main;