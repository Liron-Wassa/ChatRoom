import logo from '../../../assets/flag.svg';
import classes from './Logo.module.css';
import React from 'react';

const Logo = (props) => {

    return (
        <img src={logo} alt="logo" className={classes.Logo} />
    );
};

export default Logo;