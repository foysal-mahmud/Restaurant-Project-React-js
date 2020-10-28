import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    return(
        <div>
            <Card style={{ marginTop: "10px"}} >
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/=</p>
                    </CardText>
                    <hr />
                    <LoadComments comments = {props.dish.comments} />
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetails;