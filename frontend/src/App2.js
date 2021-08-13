import { useState, createContext, useEffect } from 'react';
/* import './sass/App.sass'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Home from './components/Home';
import Login from './components/Login';
/* import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import ListCalendar from './components/ListCalendar';
import AddCalendar from './components/AddCalendar';
import Event from './components/Event';
import EventList from './components/EventList';
import GetGroups from './components/GetGroups';
 */
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&prompt-select_account&client_id=657899331675-fr3vkhlvd1836sd7t1id2c9ik2pu3hen.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=http%3A//localhost:3000/login';

  useEffect(() => {
    let token = localStorage.getItem('jwt');

    try {
      if (jwt_decode(token)) {
        setUser(jwt_decode(token));
      }

      if (jwt_decode(token).exp < Date.now() / 1000) {
        setUser(null);
        localStorage.removeItem('jwt');
        localStorage.removeItem('access_token');
      }
    } catch (error) {
      return;
    }
  }, []);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <main>
          <Navbar setUser={setUser} />
          <Switch>
            {user ? (
              <>
                <Route path='/' exact component={Home}></Route>
{/*                 <Route path='/calendar' exact component={Calendar}></Route>
                <Route path='/listcalendar' exact component={ListCalendar}></Route>
                <Route path='/addcalendar' exact component={AddCalendar}></Route>
                <Route path='/getgroups' exact component={GetGroups}></Route> */}
{/*                 <Route
                  path='/eventList'
                  exact
                  component={() => {
                    return <EventList user={user} />;
                  }}></Route>
                <Route path='/event' exact component={Event}></Route> */}
              </>
            ) : (
              <>
                <Route path='/' exact component={Home}></Route>
                <Route
                  path='/googleauth'
                  component={() => {
                    window.location.href = googleUrl;
                    return null;
                  }}></Route>
                <Route path='/login' component={Login}></Route>
              </>
            )}
          </Switch>
        </main>
      </UserContext.Provider>
    </Router>
  );
}

export default App;