import React from 'react'
import './header.css'
import SearchBar from './SearchBar';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <header 
    id='header' 
    className='header fixed-top d-flex align-items-center'>
     {/* {Logo} */}
     <Logo />
     {/* {search bar} */}
     <SearchBar />
     {/* {nav bar} */}
     <Nav />
    </header>  
  );
}

export default Header
