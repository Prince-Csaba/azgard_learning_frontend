import './App.css';
import { useState, useEffect } from "react";
import MainScreen from './components/MainScreen';
import CoursesScreen from './components/CoursesScreen';
import BasicCourse from './components/BasicCourse';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  //fetch user data
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/user')
      .then(res => res.json())
      .then(
        (result) => {
          setUser(result);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  user && console.log(user);

  return (
    <div className="App">
      {loggedIn ? <BasicCourse user={user} /> : <MainScreen setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
