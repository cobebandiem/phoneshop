import * as types from '../constants/ActionTypes';
var initialState=[];

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SEARCH_PRODUCT:{
            let {products,txtSearch}=action.data;
            console.log(products);
            if(!txtSearch.trim()){
                console.log("null");
                return [];
            }
            products=products.filter((product)=>{
                return product.name.toLowerCase().indexOf(txtSearch.trim().toLowerCase())!==-1;
            });
            console.log(products)
            return products;
        }
        default:{
            return [...state];
        }
    }
}
export default myReducer;

