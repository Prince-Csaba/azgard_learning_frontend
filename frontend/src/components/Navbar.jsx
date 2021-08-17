import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';

function Navbar({ setUser }) {
  const user = useContext(UserContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('access_token');
  };

  return (
    <nav>
      {user ? (
        <>
          <Link to='/profile' className='profile-link'>
            <img src={user.picture} alt='ProfilePicture' />
            <h3>{user.full_name}</h3>
          </Link>
          <div>
            <Link to='/hello'>Hello</Link>
            <Link to='/basicCourse'>Képzések</Link>
            <Link to='/' onClick={logout}>
              Kijelentkezés
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to='/googleauth' className='google-button'>
            <AiFillGoogleCircle />
            Login with Google
          </Link>
          <div>
            <Link to='/'>HOME</Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;