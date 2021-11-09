import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <>
        <div className="container-fluid bg-success p-3">
            <h1 className="text-center">UTN - Curso fullstack JS</h1>
            <h3 className="text-center">TP OBLIGATORIO MOD 2</h3>
        </div>
        <Menu/>
        </>
    );
}

export default Header;
