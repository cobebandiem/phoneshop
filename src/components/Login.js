import React, { useState } from 'react';
function Login(props) {
    const [login,setLogin]=useState({username:'',password:''});
    let onHandleSubmit=(e)=>{
        e.preventDefault();
        props.onLogin(login);
    }
    let onChange=(e)=>{
        let target=e.target;
        let name=target.name;
        let value=target.type==='checkbox'?target.checked:target.value;
        setLogin({
          ...login,
          [name]:value
        });
    }
    return (
        <form onSubmit={onHandleSubmit} method="POST">
            <legend>Form Login</legend>
            <div className="form-group">
                <label htmlFor="">username</label>
                <input type="text" onChange={onChange} name="username" className="form-control" id="" placeholder="Input field"/>
            </div>
            <div className="form-group">
                <label htmlFor="">password</label>
                <input type="text" onChange={onChange} name="password" className="form-control" id="" placeholder="Input field"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;