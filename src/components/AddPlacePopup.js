import PopupWithForm from './PopupWithForm';
import {useState} from 'react';

function AddPlacePopup(props) {

  const [name, setName] = useState();
  const [link, setLink] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link
    })
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  
  return (
    <PopupWithForm
    name='card'
    title='Новое место'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    buttonText='Создать'
    children ={
      <>
      <input type="text" id='title'  minLength="2" maxLength="30" value={name} required name="name" onChange={handleChangeName} autoComplete="off" placeholder="Название" className="popup__input popup__input_type_title"/>
      <span id="title-error" className="popup__error"></span>
      <input type="url" id="url" value={link} required name="link" onChange={handleChangeLink} autoComplete="off" placeholder="Ссылка на картинку" className="popup__input popup__input_type_url"/>
      <span id="url-error" className="popup__error"></span>
      </>
    }
  />
  )
}

export default AddPlacePopup;