import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { RiTeamFill } from "react-icons/ri";
import { LinkContainer } from 'react-router-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

// import logo from '../assets/logo.png';
// import SearchBox from './SearchBox';


const Header = () => {

//   const brandLogoStyle = {
//     maxWidth: '50px',
//     maxHeight: '50px',
//     height: 'auto',
//     marginRight: '10px',
//     overflow: 'hidden', // This prevents the image from overflowing its container
//   };

    return(
         <header>
             <Navbar bg="success" variant="dark" expand="md" collapseOnSelect>
                 <Container>
                     <LinkContainer to="/">
                     <Navbar.Brand>
                        <h1> Heliteams</h1> 
                     </Navbar.Brand>
                     </LinkContainer>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto">
                         <SearchBox />
                             <LinkContainer to="/team">
                             <Nav.Link ><RiTeamFill />Team
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
                         <NavDropdown title= 'options' id='username'>
                            <LinkContainer to= '/teamslist'>
                            <NavDropdown.Item >
                                view teams
                            </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                         </Nav>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>
         </header>
         
    )
}
export default Header;