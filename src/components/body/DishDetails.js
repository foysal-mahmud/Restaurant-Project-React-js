import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

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
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetails;