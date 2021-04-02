import './../css/details/main.css';
import './../css/details/responsive.css';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import {formatVnd} from './../utils/formatMoney';

function ProductDetail(props){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        const imgHovers=document.querySelectorAll('.imgHover img');
        //console.log(imgHovers);
        const showImgActive=document.querySelector('.showImg-active');
        const active=document.querySelector('.slider_1');
        //console.log(active);
        if(active){
            active.classList.add('listImg--active');
        }
        //console.log('showImgActive:',showImgActive.src);
        //mouseover vào phần không phải la img thi event trong addEventListener sẽ khong tim thay duong dan đênt ảnh
        imgHovers.forEach((img)=>{
            img.addEventListener('mouseover',e=>{
            //console.log('event:',e.target.src)
            let nameImg=e.target.src;
            showImgActive.src=nameImg;
            imgHovers.forEach(element=>element.parentElement.classList.remove('listImg--active'));
            e.target.parentElement.classList.add('listImg--active');
            })
        });
    },[props.product.images]);
    let onAddCart=()=>{
        let {product}=props;
        const showNum=document.querySelector('.product__amount--current');
        let num=parseInt(showNum.textContent);
        props.onAddCart(product,num);
    }
    let onCountReduce=()=>{
        if(count>1){
            setCount(count-1);
        }
    }
    let onCountIncrease=()=>{
        if(count<props.product.quantity){
            setCount(count+1);
        }
    }
    let onBuyNow=()=>{
        onAddCart();
        setCount(0);
    }
    if(count===0){
        return <Redirect to="/cart"/>
    }
    let showDetails=(details)=>{
        let output=null;
        if(details){
            output=details.map((item,index)=>{
                let arrays=item.split(":");
                return (<div key={index} className="product__details--item">
                            <span className="product__details--item--title">{arrays[0]}</span>
                            <span className="product__details--trademark">{arrays[1]}</span>
                        </div>);
            })
        }
        return output;
    }
    let showDescription=(description)=>{
        let output=null;
        if(description){
            output=description.map((item,index)=>{
                if(item.toLowerCase().indexOf('.png')!==-1||item.toLowerCase().indexOf('.jpg')!==-1||item.toLowerCase().indexOf('.jpeg')!==-1){
                    return (<img src={item} alt="" key={index}/>)
                }
                return (<p key={index}>{item}</p>);
            })
        }
        return output;
    }
    let showImages=(images)=>{
        let output=null;
        if(images){
            output=images.map((item,index)=>{
               return(<li key={index} className="imgHover slide slider_1">
                        <img src={`https://hoanghamobile.com/i/preview/Uploads/${item}`} />
                    </li>);
            })
        }
        return output;
    }
    const {id,name,brand,images,price,quantity,sale,details,description}=props.product;
    return (
        <div className="app__content">
            <div className="grid wide">
                <div className="product--breadcrumb mb-0">
                    <span>PhoneShop</span><i className="product--breadcrumb-icon fas fa-chevron-right"></i>
                    <span>Phone</span><i className="product--breadcrumb-icon fas fa-chevron-right"></i>
                    <span>{brand}</span><i className="product--breadcrumb-icon fas fa-chevron-right"></i>
                    <span>{name}</span>
                </div>
                <div className="app__product">
                    <div className="product__info row">
                        <div className="product__img col-15 l-4p">
                            <div className="showImg">
                                <img className="showImg-active" src={`https://hoanghamobile.com/i/preview/Uploads/2020/11/06/${images[0]}`} />
                            </div>
                            <div className="slide-wrap">
                                <input type="radio" name="slider" id="slide11" defaultChecked hidden />
                                <input type="radio" name="slider" id="slide22" hidden />
                                <input type="radio" name="slider" id="slide33" hidden />
                                <input type="radio" name="slider" id="slide44" hidden />
                                <ul id="slides" className="listImg">
                                    {showImages(images)}
                                </ul>
                                <div id="controls">
                                    <label htmlFor="slide11"></label>
                                    <label htmlFor="slide22"></label>
                                    <label htmlFor="slide33"></label>
                                    <label htmlFor="slide44"></label>
                                </div>
                            </div>
                            <div className="product__socials">
                                <div className="">Chia sẻ:</div>
                                <button className="product__socials--item product__socials--item-fm _1CuuK_" aria-label="Share on Messenger"></button>
                                <button className="product__socials--item product__socials--item-fb _1CuuK_" aria-label="Share on Facebook"></button>
                                <button className="product__socials--item product__socials--item-gp _1CuuK_" aria-label="Share on Google Plus"></button>
                                <button className="product__socials--item product__socials--item-pinterest _1CuuK_" aria-label="Share on Pinterest"></button>
                                <button className="product__socials--item product__socials--item-twitter _1CuuK_" aria-label="Share on Twitter"></button>
                            </div>
                        </div>
                        <div className="product--info col-15 l-6p">
                            <div className="product__title">
                                <svg width="34" height="17" className="product__title--mall W86QwR"><g fill="none" fillRule="evenodd"><path d="M.796 2.905A2 2 0 0 1 2.798.911h28.995a2 2 0 0 1 2.003 1.994v12.012a2 2 0 0 1-2.003 1.994H2.798a2 2 0 0 1-2.002-1.994V2.905z" fill="#00483d"></path><g fill="#fff"><path d="M25.81 10.976h.002c0 .823.31 1.359.931 1.609v.002a.847.847 0 0 1-.63 1.572l-.002.003c-1.332-.464-1.998-1.51-1.998-3.141h.004V4.856a.846.846 0 0 1 1.693 0v6.12zM29.516 10.976h.003c0 .823.31 1.359.93 1.609v.002a.847.847 0 0 1-.63 1.572l-.002.003c-1.332-.464-1.998-1.51-1.998-3.141h.004V4.856a.846.846 0 1 1 1.693 0v6.12zM20.78 7.574c.011-.413.418-.82.918-.82.507 0 .918.418.918.837V13.3c0 .419-.41.826-.918.826-.446 0-.818-.315-.9-.676a3.57 3.57 0 0 1-2.215.768c-1.999 0-3.689-1.644-3.689-3.673 0-2.028 1.69-3.756 3.689-3.756.826 0 1.588.295 2.197.786zm-.08 2.919a2.074 2.074 0 1 0-4.146 0 2.072 2.072 0 1 0 4.145 0z"></path><path d="M3.8 4.645a.824.824 0 0 1 .55-.759c.478-.17.94.18 1.138.587.578 1.19 1.772 2.121 3.374 2.144 1.602.022 2.436-.96 3.057-2.124.215-.403.708-.835 1.277-.607.386.155.539.45.532.732.003.03.005.06.005.09v8.612a.846.846 0 1 1-1.693 0V7.02c-.86.813-1.891 1.333-3.206 1.311a5.477 5.477 0 0 1-3.346-1.237v6.225a.846.846 0 0 1-1.693 0V4.74c0-.032.002-.064.006-.096z" fillRule="nonzero"></path></g></g></svg>
                                <span className="product--name"></span>
                            </div>
                            <ul className="product__rating">
                                <li className="product__rating--item separate__lg">
                                    <span className="product__rating--amount">5.0</span>
                                    <span className="product__rating--star"><i className="fas fa-star"></i></span>
                                    <span className="product__rating--star"><i className="fas fa-star"></i></span>
                                    <span className="product__rating--star"><i className="fas fa-star"></i></span>
                                    <span className="product__rating--star"><i className="fas fa-star"></i></span>
                                    <span className="product__rating--star"><i className="fas fa-star"></i></span>
                                </li>
                                <li className="product__rating--item  separate__lg">
                                    <span className="product__rating--amount">0</span>
                                    <span className="product__rating--text">Đánh Giá</span>
                                </li>
                                <li className="product__rating--item">
                                    <span className="product__rating--sold--amount">0</span>
                                    <span className="product__rating--text">Đã Bán</span>
                                </li>
                            </ul>
                            <ul className="product__price">
                                <li className="product__price--old product__item--first">
                                    {formatVnd(price)}
                                </li>
                                <li className="product__price--current">
                                    {formatVnd(price-(price*sale/100))}
                                </li>
                                <li className="product__price--item">
                                    <span className="product__price--discount">{sale}% GIẢM</span>
                                </li>
                            </ul>
                            <div className="product__amount">
                                <span className="product__amount--title product__item--first">Số Lượng</span>
                                <span onClick={onCountReduce} className="prodct__amount--operator" id="minus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon "><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></span>
                                <span className="product__amount--current">{count}</span>
                                <span onClick={onCountIncrease} className="prodct__amount--operator" id="plus"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></span>
                                <span className="prodct__amount--available">
                                    <span id="product__available">{quantity} </span>
                                    <span>sản phẩm có sẵn</span>
                                </span>
                            </div>
                            <div className="product__order">
                                <button onClick={onAddCart} className="product__order--add">
                                    <span><i className="product__order--icon fas fa-cart-plus"></i></span>
                                    <span>Thêm Vào Giỏ Hàng</span>
                                </button>
                                <button onClick={onBuyNow} className="product__order--buy">Mua Ngay</button>
                            </div>
                            <div className="product__commit">
                                <div className="product__commit--item">
                                    <div className="product__commit--icon product__commit--icon-back"></div>
                                    <div className="product__commit--text">7 ngày miễn phí trả hàng</div>
                                </div>
                                <div className="product__commit--item">
                                    <div className="product__commit--icon product__commit--icon-check"></div>
                                    <div className="product__commit--text">Hàng chính hãng 100%</div>
                                </div>
                                <div className="product__commit--item">
                                    <div className="product__commit--icon product__commit--icon-car"></div>
                                    <div className="product__commit--text">Miễn phí vận chuyển</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                <div className="product__details">
                    <div className="product__details--title">
                        CHI TIẾT SẢN PHẨM
                        </div>
                    <div className="product__details--list">
                        {showDetails(details)}
                    </div>
                    <div className="product__details--title">
                        MÔ TẢ SẢN PHẨM
                        </div>
                    <div className="product__details--description">
                        {showDescription(description)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;