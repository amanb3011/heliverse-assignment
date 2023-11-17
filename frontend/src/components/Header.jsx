import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
// import SearchBox from './SearchBox';


const Header = () => {

  const brandLogoStyle = {
    maxWidth: '50px',
    maxHeight: '50px',
    height: 'auto',
    marginRight: '10px',
    overflow: 'hidden', // This prevents the image from overflowing its container
  };

    return(
         <header>
             <Navbar bg="success" variant="dark" expand="md" collapseOnSelect>
                 <Container>
                     <LinkContainer to="/">
                     <Navbar.Brand>
                         <img src={logo} alt='Heliteams' style={brandLogoStyle}/> Heliteams
                     </Navbar.Brand>
                     </LinkContainer>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto">
                         {/* <SearchBox /> */}
                             <LinkContainer to="/cart">
                             <Nav.Link ><FaShoppingCart /> 
                             {/* Cart 
                             {
                                 cartItems.length > 0 && (
                                        <Badge pill bg= 'success' style = {{marginLeft:'5px'}}>
                                            {cartItems.reduce((a,c) => a + c.qty, 0)}
                                        </Badge>
                                 )
                             } */}
                             </Nav.Link>
                             </LinkContainer>
                         </Nav>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>
         </header>
         
    )
}
export default Header;