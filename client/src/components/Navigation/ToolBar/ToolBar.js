import Humburger from '../SideDrawer/Hamburger/Hamburger';
import classes from './ToolBar.module.css';
import React from 'react';

const ToolBar = (props) => (
    <header>
        <div className={classes.ToolBar}>
            <Humburger clicked={props.change} />
        </div>
    </header>
);

export default ToolBar;