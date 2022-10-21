import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import { refreshUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
