import React from 'react';

function SearchList(props) {
    return (
        <ul className="header__search__list">
            {props.children}
        </ul>
    );
}

export default SearchList;