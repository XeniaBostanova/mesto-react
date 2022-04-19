import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm name="avatar" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Обновить аватар" buttonText="Сохранить">
      <input ref={inputRef} id="avatar-input" type="url" name="avatar" className="form__item form__item_type_link" placeholder="Ссылка на аватар" required />
      <span className="form__input-error avatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;