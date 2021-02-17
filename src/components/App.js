import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {useState, useEffect} from 'react'
import api from '../utils/api';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);



  useEffect(() => {
    api.getProfileInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) =>{
        console.log(`Error: ${err}`);
      })
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(item) {
    api.editProfile(item)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleUpdateAvatar(item) {
    api.editProfileAvatar(item)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    const toggleLike = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id);
    toggleLike
      .then((res) => {
        const newCards = cards.map((item) => 
          item._id === res._id ? res : item
        )
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(res => {
        const newCards = cards.filter(item => item._id !== card._id);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));

  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  return (
    <div className='page'>
      <div className="page__container">

      <CurrentUserContext.Provider value={currentUser}>           

      <Header/>

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer/>
    
     <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
     
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}

      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <ImagePopup 
        name='image'
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      </CurrentUserContext.Provider> 
    </div>
  </div>
    
    
  );
}

export default App;
