import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
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

            <Nav.Link ><Link className='text-link' to='/profile'>profile</Link></Nav.Link>
            <Nav.Link ><Link className='text-link' to='/sensor'>sensor</Link></Nav.Link>
            <NavDropdown title="temperature and humidity" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className='text-link' to='/th1'>living room</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='text-link' to='/th2'>room</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default App;
