import './../css/home/home.css';
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import Slider from './../components/Slider';
import * as actions from './../actions/index';
function ProductListContainer(props){
    let showProductList=(products)=>{
        let output=null;
        if(products.length>0){
            output=products.map((product,index)=>{
                return (<ProductItem 
                    key={index}
                    product={product}
                />)
            })
        }
        return output;
    }
    useEffect(()=>{
        props.fetchProducts();
    },[]);
    const [filter,setFilter]=useState({search:'',brand:''});
    const [title,setTitle]=useState('Điện thoại nổi bật');
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        setProducts(props.products);
    },[props.products]);
    useEffect(()=>{
        if(filter.search){
            setTitle(`Kết quả tìm kiếm của ${filter.search}`)
            let productsFake=products.filter((product)=>{
                return product.name.toLowerCase().indexOf(filter.search.trim().toLowerCase())!==-1;
            })
            setProducts(productsFake);
        }
        if(filter.brand){
            setTitle(`${filter.brand}`)
            let productsFake=products.filter((product)=>{
                return product.brand.toLowerCase()===filter.brand.toLowerCase();
            })
            setProducts(productsFake);
        }
    },[filter])
    useEffect(()=>{
        setFilter(props.filter);
    },[props.filter])
    if(filter.brand || filter.search){
        return (
            <React.Fragment>
                <ProductList title={title}>
                    {showProductList(products)}
                </ProductList>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Slider/>
            <ProductList title={title}>
                {showProductList(products)}
            </ProductList>
        </React.Fragment>
    );
}
const mapStateToProps=(state)=>{
    return {
        products:state.products,
        filter:state.filter
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        fetchProducts:(products)=>{
            dispatch(actions.actFetchProductsRequest(products))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);