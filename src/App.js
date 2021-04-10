import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Router} from 'react-router-dom';

import AppBar from './components/AppBar';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';



 
const App =() => {
    <>
        <AppBar />
        <Switch>
            <Router exact path='/' component={HomeView} />
            <Router path='/contacts' component ={ContactsView} />
            <Router path='/register' component={RegisterView} />
            <Router path='/login' component={LoginView} />
        </Switch>
    </>
}

export default App;

