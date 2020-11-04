import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    //console.log("mapStateToProps: ", state);
    return {
        dishes: state.dishes
    }
}

class Home extends Component {
    componentDidMount() {
        //console.log("Home Props: ", this.props);
        this.props.dispatch({
            type: 'TEST'
        })
    }
    render() {
        document.title = "Spyder Restaurant";
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);
