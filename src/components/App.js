import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useState, useEffect} from 'react'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  return (
    <div className='page'>
      <div className="page__container">


      <Header/>

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer/>
    
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        children={
          <>
          <input type="text" id='name' minLength="2" maxLength="40" required name="name" autoComplete="off" placeholder="Введите ваше имя" className="popup__input popup__input_type_name"/>
          <span id='name-error' className="popup__error"></span>
          <input type="text" id='profession' minLength="2" maxLength="200" required name="profession" autoComplete="off" placeholder="Чем вы занимаетесь?" className="popup__input popup__input_type_profession"/>
          <span id='profession-error' class="popup__error"></span>
          </>
          }
        
      />

      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Создать'
        children ={
          <>
          <input type="text" id='title' minLength="2" maxLength="30" required name="name" autoComplete="off" placeholder="Название" className="popup__input popup__input_type_title"/>
          <span id="title-error" className="popup__error"></span>
          <input type="url" id="url" required name="link" autoComplete="off" placeholder="Ссылка на картинку" className="popup__input popup__input_type_url"/>
          <span id="url-error" className="popup__error"></span>
          </>
        }
      />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        children={
          <>
          <input type="url" id="avatar-url" required name="avatar" autoComplete="off" placeholder="Ссылка на аватар" className="popup__input popup__input_type_url"/>
          <span id="avatar-url-error" className="popup__error"></span>
          </>
        }
      />

      <ImagePopup 
        name='image'
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

    
    </div>
  </div>
    
    
  );
}

export default App;
