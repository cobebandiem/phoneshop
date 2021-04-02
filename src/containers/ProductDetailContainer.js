import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import ProductDetail from './../components/ProductDetail';
import * as actions from './../actions/index';

function ProductDetailContainer(props) {
    useEffect(()=>{
        let {slug}=props.match.params;
        props.getProductDetail(slug);
    },[]);
    let onAddCart=(product,sl)=>{
        props.onAddCart(product,sl);
    }
    return (
        <ProductDetail 
            product={props.product}
            onAddCart={onAddCart}/>
    );
}

const mapStateToProps=(state)=>{
    return {
        product:state.productDetail
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        getProductDetail:(product)=>{
            dispatch(actions.actGetProductDetailRequest(product))
        },
        onAddCart:(product,sl)=>{
            dispatch(actions.actAddCart(product,sl))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailContainer);