import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts,removeContactHandler }) => {

  const getContactId = (id) =>{
      removeContactHandler(id)
  }

  const renderContactList = contacts.map((contact,index) => {
    return (
      <ContactCard contact = {contact} key={index+1}  getContactId = {getContactId}/>
    );
  });

  return <div className="ui celled list">
    {renderContactList}</div>;
};

export default ContactList;
