import React from 'react'
import './search-field.style.css'

const SearchBox = ({placeHolder, handleChange}) => <input className= 'search' type= 'search' placeholder= {placeHolder} onChange= {handleChange}></input>
export default SearchBox