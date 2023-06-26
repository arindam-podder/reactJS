import React , {useState} from 'react'; 
import { v4 as uuid } from 'uuid';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

/*  const contacts = [ 
    {"id":1,"name":"Arindam","email":"iam@gmail.com"},
    {"id":2,"name":"Podder","email":"pod@gmail.com"}
  ] */
  const [ contacts, setContacts ] = useState([])
  const addContactHandler = (contact) => {
    contact.id = uuid();    //adding unique id to  each contact
    setContacts([...contacts, contact]);
  } 

  function removeContactHandler(id){
    const newContacts = contacts.filter( (contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  }

  var updateData = (updateContact) => {
    var allContact = [];
    for(var i=0; i<contacts.length; i++){
      if(contacts[i].id === updateContact.id){
        contacts[i].name = updateContact.name;
        contacts[i].email = updateContact.email;
      }
      allContact[i] = contacts[i];
    }
    setContacts(allContact);
  }


  return (
    <div>
      <Header />
      <AddContact  addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}  deleteContact={removeContactHandler}  updateContact={updateData}/>     
    </div>
    
  ); 
}

export default App;
