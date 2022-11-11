import { useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import useLocalStorage from '../../hooks/useLocalStorage';

import { PageTitle, ContactsTitle } from './App.stylized';
import { Box } from '../Box/Box';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const isNameExist = contacts.find(contact => contact.number === number);

    if (isNameExist) {
      alert(`Phone ${number} is already in contacts`);
      return;
    }
    setContacts([contact, ...contacts]);

    console.log('Контакт добавлен');
  };

  const findContact = e => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Box
      pt={5}
      pl={7}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-around"
      style={{
        gap: '16px',
      }}
    >
      <PageTitle>Phonebook</PageTitle>
      <Box
        display="inline-flex"
        alignItems="flex-start"
        justifyContent="space-around"
        style={{
          gap: '200px',
        }}
      >
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <ContactsTitle>Add Contact</ContactsTitle>

          <ContactForm onSubmit={addContact} />
        </Box>
        <Box>
          <ContactsTitle>Contacts List</ContactsTitle>
          <Filter findContact={findContact} />
          <ContactList
            contacts={renderContacts()}
            deleteContact={deleteContact}
          />
        </Box>
      </Box>
    </Box>
  );
};
