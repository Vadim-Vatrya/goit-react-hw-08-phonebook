import React from 'react';
import {useSelector} from 'redux-react';

import authSelectors from 'redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => {
  const isAuthenticated  = useSelector(authSelectors.getIsAuthenticated );

  return (
    <header style={styles.header}>
    <Navigation />
    {isAuthenticated  ? <UserMenu /> : <AuthNav />}
  </header>
  )

}

export default AppBar;
