import React from 'react';
import Login from './../components/Login';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import { Redirect } from 'react-router';

function LoginContainer(props) {
    let onLogin=(body)=>{
        props.onLogin(body);
    }
    if(props.token){
        return <Redirect to='/admin'/>
    }
    return (
       <Login onLogin={onLogin}/>
    );
}

const mapStateToProps=(state)=>{
    return{
        token:state.token
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onLogin:(body)=>{
            dispatch(actions.actLoginRequest(body))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);