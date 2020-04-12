import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const SideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.show){
        attachedClasses = [classes.SideDrawer];
    }    
    
    return (
        <React.Fragment>
            <BackDrop show={props.show} clicked={props.change} />
            <nav className={attachedClasses.join(' ')}>
                <ul>
                    <li><NavLink to="/chatroom/music" activeClassName={classes.active}><i className="fas fa-users"></i>Music</NavLink></li>
                    <li><NavLink to="/chatroom/sport" activeClassName={classes.active}><i className="fas fa-users"></i>Sport</NavLink></li>
                    <li><NavLink to="/chatroom/famous" activeClassName={classes.active}><i className="fas fa-users"></i>Famous</NavLink></li>
                    <li><NavLink to="/chatroom/food" activeClassName={classes.active}><i className="fas fa-users"></i>Food</NavLink></li>
                    <li><NavLink to="/chatroom/women" activeClassName={classes.active}><i className="fas fa-users"></i>Women</NavLink></li>
                    <li><NavLink to="/chatroom/men" activeClassName={classes.active}><i className="fas fa-users"></i>men</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default SideDrawer;