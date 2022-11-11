import PropTypes from 'prop-types';
import { ContactListUl } from './ContactList.stylized';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      {!contacts.length && (
        <p className="inputName">Your contactlist is empty</p>
      )}
      <ContactListUl>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
              key={id}
            />
          );
        })}
      </ContactListUl>
    </>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
