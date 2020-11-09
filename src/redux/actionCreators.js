import axios from 'axios';
import * as actionTypes from './actionTypes';
import { baseURL } from './baseURL';
// import DISHES from '../data/dishes';

export const addComment = (dishId, rating, author, comment) => dispatch => {
    // type: actionTypes.ADD_COMMENT,
    // payload: {
    //     dishId: dishId,
    //     author: author,
    //     rating: rating,
    //     comment: comment
    // }

    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.data = new Date().toISOString();

    axios.post(baseURL +  'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseURL+"comments")
        .then(response => response.data)
        .then(commnts => dispatch(loadComments(commnts)))
}


export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess
})

export const fetchDishes = () =>  dispatch => {
        dispatch(dishesLoading());

        // setTimeout(() => {dispatch(loadDishes(DISHES))}, 2000);

        axios.get(baseURL+"dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        .catch( error => dispatch(dishesFailed(error.message)))
        
}