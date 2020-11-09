import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseURL } from '../../redux/baseURL';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    return(
        <div>
            <Card style={{ marginTop: "10px"}} >
                <CardImg top src={baseURL + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description} </CardText>
                    <CardText>{props.dish.price}/= </CardText>
                    <hr />
                    <LoadComments comments = {props.comments} commentsIsLoading = {props.commentsIsLoading} />
                    <hr/>
                    <CommentForm dishId={props.dish.id} addComment = {props.addComment} />
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetails;