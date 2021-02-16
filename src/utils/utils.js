export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error'
};

const editButton = document.querySelector('.profile__edit-button');
const editAvatarButton = document.querySelector('.profile__avatar-button');
const addButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_profile');

const nameField = popupProfile.querySelector('.popup__input_type_name');
const professionField = popupProfile.querySelector('.popup__input_type_profession');
const profileForm = popupProfile.querySelector('.popup__form');
const popupCard = document.querySelector('.popup_card');
const cardForm = popupCard.querySelector('.popup__form_card');
const avatarForm = document.querySelector('.popup__form_avatar');
const deleteButton = document.querySelector('.photos__delete-button');

export {editButton, deleteButton, editAvatarButton, addButton, popupProfile, nameField, professionField, profileForm, cardForm, avatarForm, popupCard}

