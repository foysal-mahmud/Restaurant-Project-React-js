import { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { addComment, fetchComments, fetchDishes } from '../../redux/actionCreators';
// import * as actionTypes from '../../redux/actionTypes';
// import COMMENTS from '../../data/comments';
// import DISHES from '../../data/dishes';
import DishDetail from './DishDetails';
import Loading from './Loading';
import MenuItem from './MenuItem';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())

        // addComment: (dishId, rating, author, comment) => dispatch({
        //     // type: actionTypes.ADD_COMMENT,
        //     // payload: {
        //     //     dishId: dishId,
        //     //     author: author,
        //     //     rating: rating,
        //     //     comment: comment
        //     // }
        // })
    }
}

class Menu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        // console.log(dish);
        this.setState({ selectedDish: dish });
        this.toggleModal();     // modalOpen: !this.state.modalOpen
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu";
        if(this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else if(this.props.dishes.errMess != null) {
            return (
                <Alert color="danger">{this.props.dishes.errMess}</Alert>
            )
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem 
                        dish={item} 
                        key={item.id}
                        DishSelect = {() => this.onDishSelect(item)}
                    />
                );
            })

            let dishDetail = null;
            if(this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
                dishDetail = <DishDetail 
                                dish={this.state.selectedDish} 
                                comments = { comments }
                                addComment = { this.props.addComment}
                                commentsIsLoading={this.props.comments.isLoading} />
            }

            return (
                <div className="container">
                    <div className="row">
                        
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
