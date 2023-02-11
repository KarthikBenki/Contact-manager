import React, { useContext } from "react";
import user from "../images/user.jpg";
import { RemoveContactContext } from "./RemoveContactContext";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, getContactId }) => {
  const {id,name,email} = contact;
  const trashIconStyle = {
    color: "red",
    marginTop: "7px",
  };

  const getId = useContext(RemoveContactContext);

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{pathname:`/contact/${id}`,state:{contact}}}>
        <div className="header">{name}</div>
        <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={trashIconStyle}
        onClick={() => getContactId(contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
