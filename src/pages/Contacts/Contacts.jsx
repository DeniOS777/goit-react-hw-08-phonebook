import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from 'components/Box';
import {
  selectorContacts,
  selectorError,
  selectorIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Container } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  const isFirstLoading = useRef(true);

  useEffect(() => {
    dispatch(fetchContacts()).then(res => {
      if (res.meta.requestStatus === 'fulfilled')
        isFirstLoading.current = false;
    });
  }, [dispatch]);

  const hasContacts = contacts.length > 0 && !error;

  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter />

      {isLoading && isFirstLoading.current && <Loader height="10" />}
      {error && <ErrorMessage />}
      {hasContacts && <ContactList />}
    </Container>
  );
};

export default Contacts;
