import { Card,Row,Col,Button, Container } from 'react-bootstrap'
import { addToTeam } from '../slices/teamSlice';
import { useDeleteUserMutation } from '../slices/usersApiSlice';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'



const User = ({user}) => {
    const cardStyle = {
        // Set a fixed height for the card
        height: '95%', // Adjust this value as needed
      };
    
      const imageStyle = {
        // Set a fixed height for the image
        // height: '200px', // Adjust this value as needed
        // Ensure the image covers the entire container while maintaining its aspect ratio
        objectFit: 'cover',
      };

      const dispatch = useDispatch();

      const teamHandler = () => {
        dispatch(addToTeam({user}));
    }



    return (
        <Card style={cardStyle} className="my-3 rounded">
      <Row>
        <Col md={4}>
        <Link to = {`/user/${user._id}`}>
               <Card.Img style = {imageStyle} src={user.avatar} variant='top' />
        </Link>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Link to = {`/user/${user._id}`}>
                <Card.Title as = 'div' className='product-title'>
                    <strong>
                        {user.first_name} {user.last_name}
                    </strong>
                </Card.Title>
            </Link>
            <Card.Text as="p">{user.gender}</Card.Text>
            <Card.Text as="p">{user.domain}</Card.Text>
            {user.available ? (
              <Card.Text as="h6" className="text-success">
                Available
              </Card.Text>
            ) : (
              <Card.Text as="h6" className="text-danger">
                Unavailable
              </Card.Text>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
    )
}

export default User;
