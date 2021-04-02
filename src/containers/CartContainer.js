import React from 'react';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

function CartContainer(props) {
    let showProductList=(carts)=>{
        let output=null;
        if(carts.length>0){
            output=carts.map((cart,index)=>{
                return (<CartItem 
                    key={index}
                    cart={cart}
                    onUpdateCart={(id,sl)=>props.onUpdateCart(id,sl)}
                    onDeleteCart={(id)=>props.onDeleteCart(id)}
                />)
            })
        }
        return output;
    }
    let totalMoney=(carts)=>{
        let output=0;
        if(carts.length>0){
            carts.map((cart,index)=>{
                output+=cart.sl*(cart.price-(Math.floor(cart.price*cart.sale/100))); 
            })
        }
        return output;
    }
    return (
        <CartList total={totalMoney(props.carts)}>
            {showProductList(props.carts)}
        </CartList>
    );
}
const mapStateToProps=(state)=>{
    return {
        carts:state.carts
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onUpdateCart:(id,sl)=>{
            dispatch(actions.actUpdateDeleteCart(id,sl))
        },
        onDeleteCart:(id)=>{
            dispatch(actions.actDeleteCart(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);