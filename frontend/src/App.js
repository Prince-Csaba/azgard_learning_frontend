import './App.css';
import { useState, useEffect } from "react";
import MainScreen from './components/MainScreen';
import CoursesScreen from './components/CoursesScreen';
import BasicCourse from './components/BasicCourse';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {loggedIn ? <BasicCourse /> : <MainScreen setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
