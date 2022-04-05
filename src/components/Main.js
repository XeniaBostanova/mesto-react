import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err))
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        const data = res.map(item => {
          return {
            link: item.link,
            name: item.name,
            likes: item.likes.length,
            id: item._id,
          }
        });
        setCards(data);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img src={userAvatar} alt="Аватар" className="profile__image" />
          <button type="button" className="profile__image-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__caption">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {
          cards.map(card => (
            <Card card={card} key={card.id} onCardClick={props.openImage} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;