import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopNavbar-styles.css'

function TopNavbar() {
  return (
    <>
      <Navbar className='light-grey-navbar'>
        <Container>
          <Nav className="nav-spacing">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Brand href="#avatar">Latest Avatar</Navbar.Brand>
          <Navbar.Brand href="#timeline">Patient Timeline</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;