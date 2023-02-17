import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({
  contacts,
  removeContactHandler,
  term,
  searchKeyword,
}) => {
  const inputEl = useRef("");
  const getContactId = (id) => {
    removeContactHandler(id);
  };

  const renderContactList = contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={index + 1}
        getContactId={getContactId}
      />
    );
  });

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value)
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={term}
            onChange={getSearchTerm}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length >0 ?renderContactList:"No contacts available"}</div>
    </div>
  );
};

export default ContactList;
