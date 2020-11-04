import COMMENTS from '../data/comments';
import DISHES from '../data/dishes';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS
}

export const Reducer = (state = initialState, action) => {
    //console.log("From Reducer: ", action);
    return state;
}

