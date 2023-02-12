import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactDetail from "./ContactDetail";
import api from "../api/contact";
import EditContact from "./EditContact";

function App() {
  const [contacts, setcontacts] = useState([]);

  //Retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: contacts.length + 1,
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setcontacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response;
    setcontacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );

  };

  const removeContactHandler = async (id) => {
    const result = window.confirm("are you sure?");
    if (result) {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setcontacts(newContactList);
    }
  };



  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setcontacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                removeContactHandler={removeContactHandler}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
        </Switch>
        <Route exact path="/contact/:id" component={ContactDetail} />
        <Route
          exact
          path="/edit-contact/:id"
          render={(props) => (
            <EditContact
              {...props}
              updateContactHandler={updateContactHandler}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
