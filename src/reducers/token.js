import * as types from '../constants/ActionTypes';
var initialState=JSON.parse(localStorage.getItem('tokenPhoneShop'))?JSON.parse(localStorage.getItem('tokenPhoneShop')):'';

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOGIN_SUCCESS:{
            localStorage.setItem('tokenPhoneShop',JSON.stringify(action.token));
            return action.token;
        }
        case types.LOGOUT_SUCCESS:{
            localStorage.removeItem('tokenPhoneShop');
            state='';
            return state;
        }
        default:{
            return state;
        }
    }
}
export default myReducer;