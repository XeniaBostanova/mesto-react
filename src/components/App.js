import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} openImage={handleCardClick} />
        <Footer />
      </div>

      <PopupWithForm name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" buttonText="Сохранить">
        <input id="name-input" type="text" name="name" className="form__item form__item_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="form__input-error name-input-error"></span>
        <input id="about-input" type="text" name="about" className="form__item form__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="form__input-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" buttonText="Сохранить">
        <input id="avatar-input" type="url" name="avatar" className="form__item form__item_type_link" placeholder="Ссылка на аватар" required />
        <span className="form__input-error avatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" buttonText="Создать">
        <input id="title-input" type="text" name="name" className="form__item form__item_type_title" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="form__input-error title-input-error"></span>
        <input id="link-input" type="url" name="link" className="form__item form__item_type_link" placeholder="Ссылка на картинку" required />
        <span className="form__input-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
