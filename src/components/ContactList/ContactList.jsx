import React, { Component } from 'react';
import './ContactList.css';

// export const ContactList = ({ contacts, onDeleteContact }) => {
//   <ul className="ContactList">
//     {contacts.map(({ id, name, number }) => (
//       <li key={id} className="ContactList__item">
//         <p className="ContactList__data">
//           {name}: {number}
//         </p>
//         <button type="button" onClick={() => onDeleteContact(id)}>
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>;
// };

export class ContactList extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const TotalContactsCount = contacts.length;
    return (
      <ul className="ContactList">
        {contacts.map(({ name, number, id }) => (
          <li key={id} className="ContactList__item">
            <p className="ContactList__data">
              {name}: {number}
            </p>
            <button
              className="ContactList__button"
              type="button"
              onClick={() => this.deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
        <p>Общее количество контактов: {TotalContactsCount} </p>
      </ul>
    );
  }
}
