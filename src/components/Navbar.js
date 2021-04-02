function Navbar(props) {
    return (
        <ul className="shop__nav__menu">
            <li>
                <a href="">
                    <i className="fas fa-mobile-alt"></i>
                    <span className="mb-0">ĐIỆN THOẠI</span>
                </a>
                <div className="catalog">
                    <h4>HÃNG SẢN XUẤT</h4>
                    <ul className="list__product">
                        {props.children}
                    </ul>
                </div>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-tablet-alt"></i>
                    <span className="mb-0">TABLET</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-headphones-alt"></i>
                    <span className="mb-0">LOA - TAI NGHE</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-charging-station"></i>
                    <span className="mb-0">PHỤ KIỆN</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-sim-card"></i>
                    <span className="mb-0">SIM THẺ</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="far fa-newspaper"></i>
                    <span className="mb-0">TIN TỨC</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fas fa-ad"></i>
                    <span className="mb-0">KHUYẾN MÃI</span>
                </a>
            </li>
        </ul>

    );
}

export default Navbar;
