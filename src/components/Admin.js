import React from 'react';
import Validator from './../Validate';
import { useState, useEffect } from 'react';

function Admin(props) {
    Validator({
        form: '#form-1',
        rules: [
            Validator.isRequired('#name'),
            Validator.isRequired('#brand'),
            Validator.isRequired('#description'),
            Validator.isRequired('#details'),
            Validator.isRequired('#color'),
            Validator.isRequired('#images'),
            Validator.isRequired('#price'),
            Validator.isRequired('#sale'),
            Validator.isRequired('#quantity')
        ], 
        messageElement: '.form-message',
        onSubmit: function (data) {
            let product = {
                ...data,
                description: data.description.split('\n'),
                details: data.details.split('\n'),
                images: data.images.split('\n')
            };
            let resetProduct={name: '',
            brand: '',
            description: '',
            details: '',
            color: '',
            images: '',
            price: '',
            sale: '',
            quantity:'',
            id: ''}
            props.onResetEditingProduct(resetProduct);
            props.onUpdateProduct(product);
            // console.log(data);
            // console.log(product);
            // callApi('products','POST',product)
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))
        }
    });
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        description: '',
        details: '',
        color: '',
        images: '',
        price: '',
        sale: '',
        quantity:'',
        id: ''
    });
    let onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        setProduct({
            ...product,
            [name]: value
        });
    }
    useEffect(() => {
        setProduct(props.product);
    }, [props.product])
    let resetState = () => {
        setProduct({
            name: '',
            brand: '',
            description: '',
            details: '',
            color: '',
            images: '',
            price: '',
            sale: '',
            quantity:'',
            id: ''
        });
    }
    let onChangeSearch=(e)=>{
        props.onSearch(e.target.value);
    }
    return (
        <div className="admin">           
            <button onClick={props.onLogout} type="button" style={{color:'#fff'}} className="btn btn-danger text-right">Logout</button>
            <div className="text-center">
                <h1>Qu???n L?? S???n Ph???m</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="form-add">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title flex flex-space-bw">
                                Thao t??c tr??n S???n Ph???m
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form id="form-1">
                                <div className="form-group">
                                    <label>M?? S???n ph???m:</label>
                                    <input onChange={onChange} value={product.id} readOnly id="id" name="id" type="text" className="form-control" placeholder="M?? s??? t??? ?????ng t??ng" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <input onChange={onChange} value={product.name} id="name" name="name" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Brand :</label>
                                    <input onChange={onChange} value={product.brand} id="brand" name="brand" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Description :</label>
                                    <textarea onChange={onChange} value={product.description} id="description" name="description" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Details :</label>
                                    <textarea onChange={onChange} value={product.details} id="details" name="details" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Color :</label>
                                    <input onChange={onChange} value={product.color} id="color" name="color" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Images :</label>
                                    <textarea onChange={onChange} value={product.images} id="images" name="images" type="text" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Price :</label>
                                    <input onChange={onChange} value={product.price} id="price" name="price" type="number" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Sale off :</label>
                                    <input onChange={onChange} value={product.sale} id="sale" name="sale" type="number" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Quantity :</label>
                                    <input onChange={onChange} value={product.quantity} id="quantity" name="quantity" type="number" className="form-control" />
                                    <span style={{ color: "red" }} className="form-message"></span>
                                </div>
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning">L??u l???i</button>&nbsp;
                                <button type="button" onClick={resetState} className="btn btn-danger">H???y B???</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id="form-show">
                    <br /><br />
                    <div className="row mt-15">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" name="keyWord" onChange={onChangeSearch} className="form-control" placeholder="Nh???p t??? kh??a..." />
                            </div>
                        </div>
                        {/* <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    S???p X???p <span className="fa fa-caret-square-o-down ml-5"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>
                                        <a role="button">
                                            <span className="fa fa-sort-alpha-asc pr-5">
                                                T??n A-Z
                                                </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a role="button">
                                            <span className="fa fa-sort-alpha-desc pr-5">
                                                T??n Z-A
                                                </span>
                                        </a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a role="button">Tr???ng Th??i K??ch Ho???t</a></li>
                                    <li><a role="button">Tr???ng Th??i ???n</a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <br />
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover mt-15">
                                <thead>
                                    <tr>
                                        <th style={{ width: '2%' }} className="text-center">ID</th>
                                        <th style={{ width: '4%' }} className="text-center">Name</th>
                                        <th style={{ width: '4%' }} className="text-center">Brand</th>
                                        <th style={{ width: '25%' }} className="text-center">Description</th>
                                        <th style={{ width: '20%' }} className="text-center">Details</th>
                                        <th style={{ width: '5%' }} className="text-center">Color</th>
                                        <th style={{ width: '10%' }} className="text-center">Image</th>
                                        <th style={{ width: '10%' }} className="text-center">Price</th>
                                        <th style={{ width: '5%' }} className="text-center">Sale off</th>
                                        <th style={{ width: '5%' }} className="text-center">Quantity</th>
                                        <th style={{ width: '15%' }} className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.children}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;