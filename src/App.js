


import { Switch } from '@material-ui/core';
import { Router } from '@material-ui/icons';

 
const App =() => {
    <Container>
        <AppBar />
        <Switch>
            <Router exact path='/' component={HomeView} />
            <Router path='/contacts' component ={ContactsView} />
            <Router path='/register' component={RegisterView} />
            <Router path='/login' component={LoginView} />
        </Switch>
    </Container>
}

export default App;

// const App = () => {
//     // const contacts = useSelector(getContacts);
//     const loading = useSelector(getLoading);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);


//     return (
//     <Container>
//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         {/* {loading && <Loader />} */}
//         <Loader
//           type="Puff"
//           color="#000"
//           height={70}
//           width={70}
//           visible={loading}
//         />
//         {/* {contacts.length > 0 
//         ? ( */}
//         <>
//          <Filter />
//          <ContactList />
//         </>
//         {/* )
//         : (<p>No contacts</p>)} */}
       
//     </Container>
//     )
// };
