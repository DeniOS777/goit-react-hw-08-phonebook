import { useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { selectorContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader';
import {
  Form,
  Label,
  Input,
  WrapName,
  WrapNumber,
  AddContact,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('This field doesn`t exist');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsAdding(true);
    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      resetForm();
      setIsAdding(false);
      return alreadyHasContactNotification(name);
    }

    dispatch(addContact({ name, number })).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        successfullyAddedContactNotification(name);
        return setIsAdding(false);
      } else {
        failedAddedContactNotification(name);
        return setIsAdding(false);
      }
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  function successfullyAddedContactNotification(name) {
    return toast.success(`The contact with name "${name}" added successfully`);
  }

  function alreadyHasContactNotification(name) {
    return toast.info(`The contact with name "${name}" is already in contacts`);
  }

  function failedAddedContactNotification(name) {
    return toast.error(`The contact with name "${name}" was not added`);
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={inputNameId}>Name</Label>
      <WrapName>
        <Input
          id={inputNameId}
          placeholder="Enter name..."
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <BsFillPersonFill size="18" />
      </WrapName>

      <Label htmlFor={inputNumberId}>Number</Label>
      <WrapNumber>
        <BsFillTelephoneFill size="18" />
        <Input
          id={inputNumberId}
          placeholder="Enter number..."
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </WrapNumber>
      <AddContact type="submit" disabled={isAdding}>
        {isAdding ? <Loader height="18" /> : 'Add contact'}
      </AddContact>
    </Form>
  );
};

export default ContactForm;
