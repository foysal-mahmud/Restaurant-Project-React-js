import { Component } from 'react';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetails';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = {
        dishes: DISHES,
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

    render() {

        const menu = this.state.dishes.map(item => {
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
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div className="container">
                <div className="row">
                    
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal} >
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

export default Menu;
