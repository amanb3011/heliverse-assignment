import { Row,Col } from "react-bootstrap"
import { useGetUsersQuery } from "../slices/usersApiSlice";
import User from "../components/Users";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router";
import Paginate from "../components/Paginate";
import {Container} from "react-bootstrap";




const HomeScreen = () => {
    const {pageNumber,keyword} = useParams()

    const { data , isLoading , error } = useGetUsersQuery({keyword,pageNumber});


    return (
        <>
            {isLoading ? (<Loader />) : error ? (<Message variant = 'danger'>{error?.data?.message || error.error }</Message>) : (
            <>
            <h3>Users</h3>
            {/* <Meta /> */}
            {!data.users[0] && <Message variant = 'danger'> search failed : no user found</Message>}
            <Row>
                {data.users.map((user)=> (
                    <Col key={user._id} sm={12} md={12} lg={4} xl={3}>
                        <User user={user} />
                    </Col>
                ))}
            </Row>
            <Container className="d-flex justify-content-center mt-3">
                <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''}/>
            </Container>
            </>) }
        </>
    );
};

export default HomeScreen;
