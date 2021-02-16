import PopupWithForm from './PopupWithForm';
import {useContext, useEffect, useRef} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  
  const inputRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    inputRef.current.value = currentUser.avatar;
  }, [currentUser]); 

  

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    })
  }

  return (
    <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText='Сохранить'
        onSubmit={handleSubmit}
        children={
          <>
          <input ref={inputRef} type="url" id="avatar-url" required name="avatar" autoComplete="off" placeholder="Ссылка на аватар" className="popup__input popup__input_type_url"/>
          <span id="avatar-url-error" className="popup__error"></span>
          </>
        }
      />
  )
}

export default EditAvatarPopup;