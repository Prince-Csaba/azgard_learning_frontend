import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Navigation({ setUser }) {
  const user = useContext(UserContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('access_token');
  };

  return (
    <>
      <Navbar fixed="top" expand="md" bg="dark" variant="dark">
        {/* <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="justify-content-around">
       */}
        <Container>
          {user ? (
            <Navbar.Brand className="google-button">
              <img src={user.picture} alt='ProfilePicture' />
              <h3>{user.full_name}</h3>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand href='/googleauth' className='google-button'>
              <AiFillGoogleCircle />
              Login with Google
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {user ? (
                <div>
                  <Nav.Link href='/hello'>Hello</Nav.Link>
                  <Nav.Link href='/basicCourse'>Képzések</Nav.Link>
                  <Nav.Link href='/' onClick={logout}>
                    Kijelentkezés
                  </Nav.Link>
                </div>
              ) : (
                <>
                  <div>
                    <Nav.Link href='/'>HOME</Nav.Link>
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;