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
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email || !password) {
      alert('Error');
    };

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
            name={'email'}
            placeholder="Enter e-mail"
            value={email}
            required
          />
        </labelForm>
        <labelForm>
          Password
          <inputForm
            onChange={handleChange}
            type="current-password"
            name={'password'}
            placeholder="Enter password"
            value={password}
            required
          />
        </labelForm>

       
          <button type="submit">Login</button>
        
      </form>
    </>
  )
}