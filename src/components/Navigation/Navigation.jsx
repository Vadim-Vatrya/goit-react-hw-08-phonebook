import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  // const isAuthenticated = useSelector(authSelectors.getisAuthenticated);

  return (
    <nav>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </nav>
  )
}

export default Navigation;