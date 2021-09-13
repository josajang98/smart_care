import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >Smart Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >profile</Nav.Link>
              <Nav.Link >sensor</Nav.Link>
              <NavDropdown title="temperature and humidity" id="basic-nav-dropdown">
                <NavDropdown.Item >living room</NavDropdown.Item>
                <NavDropdown.Item >room</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  );
}

export default App;
