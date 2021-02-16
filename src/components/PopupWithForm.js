function PopupWithForm(props) {
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