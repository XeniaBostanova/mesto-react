function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={props.name}>
          {props.children}
          <button type="submit" className={`form__button form__button_type_${props.name}`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;