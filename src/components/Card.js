function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <div className="element">
      <button type="button" className="element__delete-button"></button>
      <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-count">{props.card.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;