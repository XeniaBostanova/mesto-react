import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Редактировать профиль" buttonText="Сохранить">
      <input id="name-input" type="text" name="name" value={name || ''} onChange={handleNameChange} className="form__item form__item_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="form__input-error name-input-error"></span>
      <input id="about-input" type="text" name="about" value={description || ''} onChange={handleDescriptionChange} className="form__item form__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="form__input-error about-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;