import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';



const RegisterView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
          setName(value);
          break;

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

    if (!name || !email || !password)
     return;

    dispatch(authOperations.logIn({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <>
      
      <form onSubmit={handleSubmit}>
      <labelForm>
          Name
          <inputForm
            onChange={handleChange}
            type="name"
            name="name"
            placeholder="Enter name"
            value={name}
          />
        </labelForm>
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

};

export default RegisterView;