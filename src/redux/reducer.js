import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';
// import DISHES from '../data/dishes';
import * as actionTypes from './actionTypes';
import { InitialContactForm } from './forms';

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS
//     // sample: "Hello World"
// }

const dishReducer = (dishState = { isLoading: false, dishes: [], errMess: null }, action) => { // dishState = DISHES
    switch(action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
        default:
            return dishState;
    }
}

const commentReducer = (commentState =  { isLoading: true, comments: [] }, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };
            
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            };

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = commentState.length;
            // comment.date = new Date().toDateString();
            //console.log(comment);
            // return commentState.concat(comment);
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
    // if(action.type === 'ADD_COMMENT') {
    //     let comment = action.payload;
    //     comment.id = commentState.length;
    //     comment.date = new Date().toDateString();
    //     //console.log(comment);
    //     return commentState.concat(comment);
    // }
    // return commentState;
}

// const commentReducer = (commentState = COMMENTS, action) => {
//     switch(action.type) {
//         case actionTypes.ADD_COMMENT:
//             let comment = action.payload;
//             comment.id = commentState.length;
//             comment.date = new Date().toDateString();
//             //console.log(comment);
//             return commentState.concat(comment);
//         default:
//             return commentState;
//     }
//     // if(action.type === 'ADD_COMMENT') {
//     //     let comment = action.payload;
//     //     comment.id = commentState.length;
//     //     comment.date = new Date().toDateString();
//     //     //console.log(comment);
//     //     return commentState.concat(comment);
//     // }
//     // return commentState;
// }

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})


// export const Reducer = (state = initialState, action) => {
//     console.log("From Reducer: ", action);
//     if(action.type === 'TEST'){
//         return {
//             ...state,
//             sample: action.str
//         }
//     }


//     if(action.type === 'ADD_COMMENT') {
//         let comment = action.payload;
//         comment.id = state.comments.length;
//         comment.date = new Date().toDateString();
//         //console.log(comment);
//         return {
//             ...state,
//             comments: state.comments.concat(comment)
//         }
//     }
//     return state;
// }

