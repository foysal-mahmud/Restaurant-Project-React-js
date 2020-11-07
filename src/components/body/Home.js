import React, { Component } from 'react';
import Loading from './Loading';
// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     //console.log("mapStateToProps: ", state);
//     return {
//         dishes: state.dishes,
//         sample: state.sample
//     }
// }

class Home extends Component {
    // componentDidMount() {
    //     console.log("Home Props: ", this.props);
    //     this.props.dispatch({
    //         type: 'TEST',
    //         str: "Foysal"
    //     })
    // }

    // componentDidUpdate() {
    //     console.log("Home props updated: ", this.props);
    // }

    render() {
        document.title = "Spyder Restaurant";
        return (
            <div>
                <h1>Just Loading........</h1>
                <Loading />
            </div>
        )
    }
}

export default Home; //connect(mapStateToProps)(Home);
