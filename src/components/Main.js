import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img src={currentUser.avatar} alt="Аватар" className="profile__image" />
          <button type="button" className="profile__image-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__caption">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {
          props.cards.map(card => (
            <Card card={card} key={card._id} onCardClick={props.openImage} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;