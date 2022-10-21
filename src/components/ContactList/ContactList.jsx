import { useSelector, useDispatch } from 'react-redux';
import { resetFilter } from 'redux/filter/filterSlice';
import {
  selectorFilteredContacts,
  selectorFilterValue,
} from 'redux/contacts/contactsSelectors';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectorFilterValue);
  const filteredContacts = useSelector(selectorFilteredContacts);

  const clearFilter = () => {
    const emptyFilteredContacts =
      filteredContacts.length - 1 === 0 && filterValue !== '';

    if (emptyFilteredContacts) {
      dispatch(resetFilter());
    }
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          clearFilter={clearFilter}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;
