import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, removeContactHandler }) => {
  const getContactId = (id) => {
    removeContactHandler(id);
  };

  const contacts_1 = [
    {
      id: "1",
      name: "Nick",
      email: "nick@gmail.com",
    },
  ];

  const renderContactList = contacts_1.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={index + 1}
        getContactId={getContactId}
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact List
        <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
