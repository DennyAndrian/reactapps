import './App.css';
import {Navbar, Nav, NavDropdown, FormControl, Button, Form} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

function App() {
  return (
   <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


<Helmet>
  <title>Users App</title>
  <meta property="og:title" content="Users App"/>
  <meta property="og:url" content="https://sleepy-franklin-87c3f4.netlify.app/"/>
  <meta property="og:description" content="Technical Academy provide you best learning resources for javascriptttt"/>
  <meta property="og:image" content="http://webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg"/>
</Helmet>
   </>
  );
}

export default App;
