import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Box } from './Box';
// import {
//   selectorContacts,
//   selectorError,
//   selectorIsLoading,
// } from 'redux/contacts/contactsSelectors';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { Loader } from './Loader';
// import { ErrorMessage } from 'components/ErrorMessage';
// import { Container } from './App.styled';

import { Layout } from './Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import { refreshUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectorContacts);
  // const isLoading = useSelector(selectorIsLoading);
  // const error = useSelector(selectorError);

  // const isFirstLoading = useRef(true);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const hasContacts = contacts.length > 0 && !error;

  return (
    // <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
    // </Container>
  );
};

export default App;

/* <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter />

      {isLoading && isFirstLoading.current && <Loader height="10" />}
      {error && <ErrorMessage />}
      {hasContacts && <ContactList />} */
