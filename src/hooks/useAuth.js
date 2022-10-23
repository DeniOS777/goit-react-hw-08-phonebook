import { useSelector } from 'react-redux';
import {
  selectorLoggedIn,
  selectorRefreshUser,
  selectorUserName,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorLoggedIn);
  const isRefreshUser = useSelector(selectorRefreshUser);
  const userName = useSelector(selectorUserName);

  return {
    isLoggedIn,
    isRefreshUser,
    userName,
  };
};
