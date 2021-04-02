import * as types from '../constants/ActionTypes';
var initialState = {id: 1,
    name: "",
    brand: "",
    description: [],
    details: [],
    color: "",
    price: 0,
    images: [""],
    sale: 0
    };

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_DETAIL: {
            return action.product;
        }
        default: {
            return { ...state };
        }
    }
}
export default myReducer;

