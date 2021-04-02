import React from 'react';

function AdminItem(props) {
    const {id,name,brand,description,details,color,images,price,sale,quantity}=props.product;
    let showDescription=(description)=>{
        let output=null;
        if(description.length>0){
            output=description.map((des,index)=>{
                return (<li key={index}>{des}</li>)
            })
        }
        return output;
    }
    return (
        <tr>
            <td style={{width: '2%'}}>{id}</td>
            <td style={{width: '4%'}}>{name}</td>
            <td style={{width: '4%'}}>{brand}</td>
            <td style={{width: '25%'}}>
                <ul className="p-l-10">
                    {showDescription(description)}
                </ul>
            </td>
            <td style={{width: '20%'}}>
                <ul className="p-l-10" style={{}}>
                    {showDescription(details)}
                </ul>
            </td>
            <td style={{width: '5%'}}>{color}</td>
            <td className="p-l-10" style={{width: '10%'}}>
                <ul className="p-l-10">
                    {showDescription(images)}
                </ul>
            </td>
            <td style={{width: '10%'}}>{price}</td>
            <td style={{width: '5%'}}>{sale}%</td>
            <td style={{width: '5%'}}>{quantity}</td>
            <td style={{width: '15%'}}>
                <button onClick={()=>props.onEditingProduct(props.product)} type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>&nbsp;Sửa
                </button>
                &nbsp;
                <button onClick={()=>{props.onDeleteProduct(id)}} type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>&nbsp;Xóa
                </button>
            </td>
        </tr>
    );
}

export default AdminItem;