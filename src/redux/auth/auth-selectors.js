const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUsername = state => state.auth.user.name;

/*eslint-disable*/
export default {
  getIsAuthenticated,
  getUsername,
};