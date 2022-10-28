import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivatRoute, RestrictedRoute } from 'components/Routes';
import { useAuth } from 'hooks';
import { TextLoader } from './TextLoader';
import Home from 'pages/Home';

const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

const App = () => {
  const { isRefreshUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshUser ? (
    <TextLoader text="Wait a several minutes please, we are loading your data..." />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={<PrivatRoute redirectTo="/login" component={<Contacts />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
