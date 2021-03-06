import { toast } from 'react-toastify';
import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionTypes';

export const actFetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts=(products)=>{
    return {
        type:types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            console.log(res)
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct=(id)=>{
    return {
        type:types.DELETE_PRODUCT,
        id:parseInt(id)
    }
}

export const actUpdateProductRequest=(body)=>{
    return dispatch=>{
        if(body.id){
            return callApi(`products/${body.id}`,'PUT',body).then(res=>{
                let bodyFake={
                    ...body,
                    id:body.id
                }
                dispatch(actUpdateProduct(bodyFake));
            })
        }else{
            return callApi(`products`,'POST',body).then(res=>{
                dispatch(actAddProduct(res.data));
            })
        }
        
    }
}
export const actAddProduct=(body)=>{
    return{
        type:types.ADD_PRODUCT,
        body
    }
}
export const actUpdateProduct=(body)=>{
    return{
        type:types.UPDATE_PRODUCT,
        body
    }
}



export const actSearchProductRequest=(txtSearch)=>{
    return (dispatch)=>{
        return callApi(`products`,'GET',null).then(res=>{
            let data={
                txtSearch,
                products:res.data
            }
            console.log(data)
            dispatch(actSearchProduct(data));
        })
    }
}


export const actSearchProduct=(data)=>{
    return {
        type:types.SEARCH_PRODUCT,
        data
    }
}

//cart action
export const actAddCart=(product,sl)=>{
    return {
        type:types.ADD_CART,
        payload:{
            ...product,
            sl
        }
    }
}
export const actUpdateDeleteCart=(id,sl)=>{
    return dispatch=>{
        if(sl===0){
            dispatch(actDeleteCart(id))
        }else{
            dispatch(actUpdateCart(id,sl))
        }
    }
}
export const actUpdateCart=(id,sl)=>{
    return {
        type:types.UPDATE_CART,
        payload:{
            id,
            sl
        }
    }
}
export const actDeleteCart=(id)=>{
    return {
        type:types.DELETE_CART,
        id
    }
}



//get product detail
export const actGetProductDetailRequest=(id)=>{
    return dispatch=>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProductDetail(res.data));
        })
    }
}
export const actGetProductDetail=(product)=>{
    return {
        type:types.PRODUCT_DETAIL,
        product
    }
}
export const actEditingProduct=(product)=>{
    return {
        type:types.EDITING_PRODUCT,
        product
    }
}



export const actFilterBrand=(brand)=>{
    return {
        type:types.EDITING_BRAND,
        brand
    }
}
export const actFilterSearch=(search)=>{
    return {
        type:types.EDITING_SEARCH,
        search
    }
}



export const actLoginRequest=(body)=>{
    return dispatch=>{
        console.log(body)
        if(body.username==='admin'&&body.password==='admin'){
            toast.success('????ng nh???p th??nh c??ng!');
            dispatch(actLoginSuccess('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTYxNzIwNTIyNH0.keF-LCPeKZbIcwBtUw20lM0NYAW1-2yMfM-oEH2E17Q&oq=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTYxNzIwNTIyNH0.keF-LCPeKZbIcwBtUw20lM0NYAW1-2yMfM-oEH2E17Q&aqs=chrome..69i57.456j0j7&sourceid=chrome&ie=UTF-8'));
        }else{
            toast.error('Ki???m tra l???i username or password c???a b???n!');
        }
        // return callApi(`login`,'POST',body).then(res=>{
        //     if(res.data.token){
        //         toast.success('????ng nh???p th??nh c??ng!');
        //         dispatch(actLoginSuccess(res.data.token));
        //     }else{
        //         toast.error('Ki???m tra l???i sdt ho???c m???t kh???u c???a b???n!');
        //     }
        // })
    }
}
export const actLoginSuccess=(token)=>{
    return {
        type:types.LOGIN_SUCCESS,
        token
    }
}
export const actLogoutSuccess=()=>{
    toast.success('????ng xu???t th??nh c??ng!');
    return {
        type:types.LOGOUT_SUCCESS
    }
}

// export const actLoginRequest=(token)=>{
//     return dispatch=>{
//         return callApi(`token`,'GET',token).then(res=>{
//             if(res.data){
//             }else{
//                 dispatch(act(res.data.token));
//             }
//         })
//     }
// }