import ProductItem from './ProductItem';

function ProductList(props) {
    return (
        <div className="shop__list">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="list__items grid row">
                {props.children}
            </div>
        </div>
    );
}

export default ProductList;
