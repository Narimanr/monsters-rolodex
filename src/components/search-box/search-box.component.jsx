import React from "react";

import './search-box.styles.css';

// This is a functional component (when we just want to rune some html)
// this component just gets some props and returns some html
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' placeholder={placeholder} onChange={ handleChange }
    />
);