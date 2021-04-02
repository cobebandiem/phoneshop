import React from 'react';
import Navbar from './../components/Navbar';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

function NavbarContainer(props) {
    let showMenuLink=(products)=>{
        let output=null;
        let brands=products.map((product)=>{return product.brand});
        brands=brands.filter((brand,index)=>{
            return brands.indexOf(brand)===index;
        })
        if(brands){
            output=brands.map((brand,index)=>{
                return (<li key={index}>
                            <span onClick={()=>{props.onFilterBrand(brand)}}>{brand}</span>
                        </li>);
            })
        }
        return output;
    }
    return (
        <Navbar>
            {showMenuLink(props.products)}
        </Navbar>
    );
}
const mapStateToProps=(state)=>{
    return {
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onFilterBrand:(brand)=>{
            dispatch(actions.actFilterBrand(brand))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer);