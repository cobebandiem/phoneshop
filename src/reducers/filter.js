import * as types from '../constants/ActionTypes';
var initialState={
    search:'',
    brand:''
};

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.EDITING_BRAND:{
            state.brand=action.brand;
            console.log(state)
            return {...state}
        }
        case types.EDITING_SEARCH:{
            state.search=action.search;
            return {...state}
        }
        default:{
            return {...state};
        }
    }
}
export default myReducer;

