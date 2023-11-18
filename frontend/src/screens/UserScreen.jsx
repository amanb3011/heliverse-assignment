import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row,Col,Image,ListGroup,Card,Button, ListGroupItem ,Container} from "react-bootstrap";
import { useGetUserDetailsQuery , useDeleteUserMutation} from "../slices/usersApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch,useSelector } from "react-redux";
import {toast} from 'react-toastify'
import { LinkContainer } from "react-router-bootstrap";
// import Meta from "../components/Meta";
// import { FaTrash } from "react-icons/fa";

const UserScreen = () => {
    const { id:userId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data:user, isLoading , refetch, error} = useGetUserDetailsQuery(userId);
    const [deleteUser , {isLoading : loadingDelete}] = useDeleteUserMutation();

    // const {userInfo} = useSelector((state) => state.auth);

    const addToTeamHandler = () => {
        
    }


    const deleteHandler = async() => {
        if(window.confirm('are you sure you want to delete this user?'))
          {
            try {
              await deleteUser(user._id);
              toast.success('User Deleted');
              navigate('/');
            } catch (err) {
              toast.error(err?.data?.message || err?.error);
            }
          }
      }
    return (
        <>
        <Link className='btn btn-light my-3' to = '/'>
               Go Back
        </Link>
        {isLoading ? (<Loader />) : error ? (<Message variant = 'danger'>{error?.data?.message || error.error }</Message>) : ( 
        <> 
        {/* <Meta title = {product.name} /> */}
           <Row>
               <Col md={3}>
                 <Image src={user.avatar} alt={user.first_name} fluid />
               </Col>
               <Col md={5}>
                <ListGroup variant ='flush'>
                    <ListGroupItem>
                        <h3>{user.first_name} {user.last_name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                       email: {user.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      gender : {user.gender}
                    </ListGroupItem>
                </ListGroup>
               </Col>
               <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Domain:</Col>
                                <Col>
                                    <strong>
                                    {user.domain}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Availability:</Col>
                                <Col>
                                   
                                    {user.available ? (
                                        <strong>
                                        Available
                                        </strong>
                                    ) : (
                                        <strong>
                                        Unavailable
                                        </strong>
                                    )}     
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Container>
                            <Row>
                            <Col>
                                <Button className = 'btn-md mx-2' variant="danger" onClick={deleteHandler}>Delete</Button>
                            </Col>
                            <LinkContainer to = {`edit`}>
                            <Col>
                                <Button className = 'btn-md mx-2' variant="primary" >update</Button>
                            </Col>
                            </LinkContainer>
                            </Row>
                        </Container>  
                        </ListGroupItem>
                        <ListGroupItem className="text-center">
                            <Button
                            className='btn-block w-100'
                            type='button'
                            variant="outline-success"
                            disabled={user.available === false}
                            onClick = {addToTeamHandler}
                            >
                                Add To Team
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
               </Col>
           </Row>
           </>)}
        </>
    )
}

export default UserScreen;
