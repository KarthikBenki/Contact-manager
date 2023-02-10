import React, { useContext } from "react";
import user from "../images/user.jpg";
import { RemoveContactContext } from "./RemoveContactContext";

const ContactCard = ({ contact, getContactId }) => {
  const trashIconStyle = {
    color: "red",
    marginTop: "7px",
  };

  const getId = useContext(RemoveContactContext);

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>

      <i
        className="trash alternate outline icon"
        style={trashIconStyle}
        onClick={() => getId(contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
