import {useEffect} from 'react';

function PopupWithForm(props) {

  const closeByEscape = (e) => {
    if (e.key === 'Escape') {
      props.onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeByEscape);

    return() => {
      document.removeEventListener('keydown', closeByEscape);
    }

  }, []);

  
  const closeByClick = (e) => {
    e.target.classList.contains('popup') && props.onClose();
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeByClick);

    return () => {
      document.removeEventListener('mousedown', closeByClick);
    }
  })

  return(
<div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : false}`}>
  <div className={`popup__container popup__container_${props.name}`}>
    <button className={`popup__close popup__close_${props.name}`} type="button" onClick={props.onClose}></button>
    <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
    <form className={`popup__form popup__form_${props.name}`}  name={props.name} method="GET" onSubmit={props.onSubmit} noValidate>
      {props.children}
      <button className={`popup__save-button popup__save-button_${props.name}`} type="submit">{props.buttonText}</button>
    </form>
  </div>
</div>
  )
}

export default PopupWithForm;