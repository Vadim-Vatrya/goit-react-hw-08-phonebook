import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const LoginView = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
          setEmail(value);
          break;

      case 'password':
          setPassword(value);
          break;

      default:
          return;
  }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email || !password) 
     return;

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <labelForm>
          E-mail
          <inputForm
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={email}
          />
        </labelForm>
        <labelForm>
          Password
          <inputForm
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
          />
        </labelForm>

       
          <button type="submit">Login</button>
        
      </form>
    </>
  )
}