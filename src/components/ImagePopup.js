function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image-item" />
        <h3 className="popup__image-caption"></h3>
      </div>
    </div>
  );
}

export default ImagePopup;