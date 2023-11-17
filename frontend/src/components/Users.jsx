import { Card } from 'react-bootstrap'
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

    return (
        <Card style = {cardStyle} className='my-3 p-3 rounded'>
            <Link to = {`/user/${user._id}`}>
               <Card.Img style = {imageStyle} src={user.avatar} variant='top' />
            </Link>
            
            <Card.Body>
            <Link to = {`/user/${user._id}`}>
                <Card.Title as = 'div' className='product-title'>
                    <strong>
                        {user.first_name} {user.last_name}
                    </strong>
                </Card.Title>
            </Link>

            <Card.Text as='p'>{user.domain}</Card.Text>
            
            {user.available ? (<Card.Text as='h6' className ='text-success'>Available</Card.Text>) : (<Card.Text as='h6' className ='text-danger'>Unavailable</Card.Text>)}
            
            </Card.Body>
        </Card>
    )
}

export default User;
