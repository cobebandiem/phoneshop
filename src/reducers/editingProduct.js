import * as types from '../constants/ActionTypes';
var initialState = {
    name: '',
    brand: '',
    description: '',
    details: '',
    color: '',
    images: '',
    price: '',
    sale: '',
    id: ''
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDITING_PRODUCT: {
            return action.product;
        }
        default: {
            return { ...state };
        }
    }
}
export default myReducer;

