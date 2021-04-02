import { Link } from "react-router-dom";
import {formatVnd} from './../utils/formatMoney';
function ProductItem(props) {
    return (
        <div className="col l-2-4 m-4 c-6">
            <Link to={`dien-thoai/${props.product.id}`} className="home-product-item">
                <div className="home-product-item__img" style={{
                    backgroundImage:`url('https://hoanghamobile.com/i/preview/Uploads/${props.product.images[0]}')`,
                }}>
                </div>
                <h4 className="home-product-item__name">{props.product.name}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-current">{formatVnd(props.product.price-(props.product.price*props.product.sale/100))}</span>
                    <span className="home-product-item__price-old">{formatVnd(props.product.price)}</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-present">-12%</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
