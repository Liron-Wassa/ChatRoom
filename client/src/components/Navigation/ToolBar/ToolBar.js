import Humburger from '../SideDrawer/Hamburger/Hamburger';
import classes from './ToolBar.module.css';
import ExitBtn from './ExitBtn/ExitBtn';
import Room from '../../Chat/Room/Room';
import React from 'react';

const ToolBar = (props) => (
    <header>
        <div className={classes.ToolBar}>
            <Humburger clicked={props.change} />
            <Room />
            <ExitBtn />
        </div>
    </header>
);

export default ToolBar;