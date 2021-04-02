import * as types from '../constants/ActionTypes';
import './../css/cart/responsive.css';
var initialState=JSON.parse(localStorage.getItem('carts'))?JSON.parse(localStorage.getItem('carts')):[];

let findIndex=(id,carts)=>{
    let index=-1;
    if(carts.length>0){
        index=carts.findIndex((cart)=>cart.id===id);
    }
    return index;
}
var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_CART:{
            let {payload}=action;
            let index=findIndex(payload.id,state);
            if(index===-1){
                state.push(payload);
            }else{
                state[index].sl+=payload.sl;
            }
            localStorage.setItem('carts',JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_CART:{
            let {id,sl}=action.payload;
            let index=findIndex(id,state);
            state[index].sl=sl;
            localStorage.setItem('carts',JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_CART:{
            let {id}=action;
            let index=findIndex(id,state);
            state.splice(index,1);
            localStorage.setItem('carts',JSON.stringify(state));
            return [...state];
        }
        default:{
            return [...state];
        }
    }
}
export default myReducer;

