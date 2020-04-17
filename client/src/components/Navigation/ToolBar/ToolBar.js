import Humburger from '../SideDrawer/Hamburger/Hamburger';
import classes from './ToolBar.module.css';
import ExitBtn from './ExitBtn/ExitBtn';
import React from 'react';

const ToolBar = (props) => (
    <header>
        <div className={classes.ToolBar}>
            <Humburger clicked={props.change} />
            <ExitBtn />
        </div>
    </header>
);

export default ToolBar;