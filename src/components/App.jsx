import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
// import { GlobalStyle } from './GlobalStyle';
// import { ModernNormalize } from 'emotion-modern-normalize';
// import { ContactForm } from './ContactForm/ContactForm';
// import { AddContact } from './AddContact/AddContact';
// import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        {/* <ModernNormalize />
        <GlobalStyle /> */}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <AddContact /> */}
        {/* <Filter /> */}
        <ContactList />
      </>
    );
  }
}
