import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';
import { VscTrash } from 'react-icons/vsc';
import { Loader } from 'components/Loader';

const ContactItem = ({ id, name, number, clearFilter }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDeletingContact = () => {
    console.log(id);
    setIsDeleting(true);
    dispatch(deleteContact(id)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`The contact named ${name} deleted successfully`);
        clearFilter();
      }
    });
  };

  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{number}</a>
      </ContactName>

      {isDeleting ? (
        <Loader height="35" />
      ) : (
        <ContactDelete onClick={handleDeletingContact} type="button">
          <VscTrash />
        </ContactDelete>
      )}
    </ContactsItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default ContactItem;
