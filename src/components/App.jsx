import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { RemoveContactContext } from "./RemoveContactContext";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setcontacts([...contacts, { id: contacts.length + 1, ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/"
            component={() => (
              <RemoveContactContext.Provider value={removeContactHandler}>
                <ContactList
                  contacts={contacts}
                  removeContactHandler={removeContactHandler}
                />
              </RemoveContactContext.Provider>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
