import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Sensor from './Sensor'
import TH from './TH'

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Route exact path='/'><Home /></Route>
      <Route path='/profile'><Profile /></Route>
      <Route path='/sensor'><Sensor /></Route>
      <Route path='/th'><TH /></Route>
    </div>
  );
}
function Navi() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link className='text-link' to='/'>Smart Care</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link ><Link className='text-link' to='/profile'>Profile</Link></Nav.Link>
            <NavDropdown title="Sensor" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className='text-link' to='/sensor/display'>Sensor Display</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='text-link' to='/sensor/edit'>Sensor Edit</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Temperature and Humidity" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className='text-link' to='/th1'>Living room</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='text-link' to='/th2'>Room</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default App;
