import './../css/header.css';
import './../css/grid.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
function Header(props) {
    const [search,setSearch]=useState('');
    let onChange=(event)=>{
        var target=event.target;
        var value=target.value;
        setSearch(value);
        props.onSearch(value);
    }
    let onClickSearch=()=>{
        if(search){
            props.onClickSearch(search)
        }
    }
    return (
        <header>
            <div className="header__top">
                <div className="container">
                    <ul className="menu-list">
                        <li className="mb-0"><a>Số 97 Man Thiện Quận 9 Thành Phó Hồ Chí Minh</a></li>
                        <li className=""><Link to='/login'>Đăng nhập</Link></li>
                    </ul>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__logo mb-0">
                        <a href="">
                            <img src="https://www.thephoneshopmidlands.com/uploads/u6EFvIyP/737x0_1094x0/The-Phone-Shop-Midlands-logo-v4.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__search">
                        <input type="text" name="txtSearch" onChange={onChange} placeholder="Hôm nay bạn cần tìm gì?"/>
                        <button onClick={onClickSearch} className="header__search--icon" htmlFor="checkbox-search">
                            <i className="fas fa-search"></i>
                        </button>
                        {props.children}
                    </div>
                    <div className="header__contact mb-0">
                        <span className="">Liên hệ trực tiếp</span>
                        <span><i className="fas fa-phone"></i>  0944748742</span>
                    </div>
                    <div className="header__cart mb-0">
                        <Link to="/cart">
                            <i className="header__cart-icon fas fa-shopping-cart"></i>
                        </Link>
                        <span className="header__cart--quanlity">{props.carts}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
