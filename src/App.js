import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route  } from 'react-router-dom'
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,  
  NavItem,
  NavLink,
  Table} from 'reactstrap';
  

const Dashboard = () => ( 
    <Row >
    <Col xs="4" md="4">
    </Col>
      <Col xs="10" md="4">
      Dashboard
      
      </Col>
    </Row>
)

const About = () => ( 
  <h1 >  
    About      
  </h1>
)

const App = () => {
  return (
    <div>    
      <Navbar color="light" light expand="md">
            <NavbarBrand href="/">App</NavbarBrand>        

            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/" activeClassName="">
                Dashboard
                </NavLink>
              </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/about" activeClassName="">
                About
                </NavLink>
              </NavItem>
                      
              </Nav>
      </Navbar>    

    <div>
    <Container fluid>
    
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </Container>
    </div>  
  </div>
   
  );
};


export default App;

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
