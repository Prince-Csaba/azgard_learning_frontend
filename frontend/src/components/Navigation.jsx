import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation({ setUser }) {
  const user = useContext(UserContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('access_token');
  };

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {user ? (
              <>
                <Nav.Link to='/profile' className='profile-link'>
                  <img src={user.picture} alt='ProfilePicture' />
                  <h3>{user.full_name}</h3>
                </Nav.Link>
                <div>
                  <Nav.Link to='/hello'>Hello</Nav.Link>
                  <Nav.Link to='/basicCourse'>Képzések</Nav.Link>
                  <Nav.Link to='/' onClick={logout}>
                    Kijelentkezés
                  </Nav.Link>
                </div>
              </>
            ) : (
              <>
                <Nav.Link to='/googleauth' className='google-button'>
                  <AiFillGoogleCircle />
                  Login with Google
                </Nav.Link>
                <div>
                  <Nav.Link to='/'>HOME</Nav.Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;