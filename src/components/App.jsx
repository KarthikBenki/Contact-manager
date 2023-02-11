import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactDetail from "./ContactDetail";
import api from '../api/contact'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(
    // JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    []
  );

//Retrieve contacts
const retrieveContacts = async() =>{
 const response = await api.get("/contacts")
 return response.data;
}

  const addContactHandler = (contact) => {
    setcontacts([...contacts, { id: contacts.length + 1, ...contact }]);
  };

  const removeContactHandler = (id) => {
    const result = window.confirm("are you sure?");
    if (result) {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setcontacts(newContactList);
    }
  };

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(()=>{
   const getAllContacts = async ()=>{
    const allContacts = await retrieveContacts();
      if (allContacts) {
        setcontacts(allContacts)
      }
   }
   getAllContacts();
  },[])

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
      </Router>
    </div>
  );
}

export default App;
