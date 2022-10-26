import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import {
  selectorContacts,
  selectorError,
  selectorIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Container } from './Contacts.styled';
import { toast } from 'react-toastify';
import { Wrap } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  const isFirstLoading = useRef(true);

  useEffect(() => {
    dispatch(fetchContacts()).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        return (isFirstLoading.current = false);
      }
      return toast.error('Something went wrong...🤷‍♂️');
    });
  }, [dispatch]);

  const hasContacts = contacts.length > 0 && !error;
  const shouldShowLoader = isLoading && isFirstLoading.current;

  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Wrap>
        <ContactForm />
        <Filter />
      </Wrap>

      {shouldShowLoader && <Loader height="10" />}
      {error && <ErrorMessage />}
      {hasContacts && <ContactList />}
    </Container>
  );
};

export default Contacts;
