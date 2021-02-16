import PopupWithForm from './PopupWithForm';
import {useState, useContext, useEffect} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(currentUser.name)
    setUserDescription(currentUser.about);
  }, [currentUser]); 

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();

  function handleChangeName(e) {
    setUserName(e.target.value);
  }

  function handleChangeDescription(e) {
    setUserDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: userName,
      profession: userDescription
    })
  }

  return(
    <PopupWithForm
    name='profile'
    title='Редактировать профиль'
    isOpen={props.isOpen}
    onClose={props.onClose}
    buttonText='Сохранить'
    onSubmit={handleSubmit}
    children={
      <>
      <input type="text" id='name' minLength="2" maxLength="40" value={userName} onChange={handleChangeName} required name="name" autoComplete="off" placeholder="Введите ваше имя" className="popup__input popup__input_type_name"/>
      <span id='name-error' className="popup__error"></span>
      <input type="text" id='profession' minLength="2" maxLength="200" value={userDescription} onChange={handleChangeDescription} required name="profession" autoComplete="off" placeholder="Чем вы занимаетесь?" className="popup__input popup__input_type_profession"/>
      <span id='profession-error' class="popup__error"></span>
      </>
      }
    
  />
  )
}

export default EditProfilePopup;