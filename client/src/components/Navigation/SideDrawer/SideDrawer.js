import { ChatContext } from '../../../contexts/ChatContext';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';

const SideDrawer = () => {
    
    const { show, userName } = useContext(ChatContext);

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(show){
        attachedClasses = [classes.SideDrawer];
    }    
    
    return (
        <React.Fragment>
            <BackDrop />
            <nav className={attachedClasses.join(' ')}>
                <ul>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=music`} activeClassName={classes.active}><i className="fas fa-users"></i>Music</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=sport`} activeClassName={classes.active}><i className="fas fa-users"></i>Sport</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=famous`} activeClassName={classes.active}><i className="fas fa-users"></i>Famous</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=food`} activeClassName={classes.active}><i className="fas fa-users"></i>Food</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=women`} activeClassName={classes.active}><i className="fas fa-users"></i>Women</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=men`} activeClassName={classes.active}><i className="fas fa-users"></i>men</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default SideDrawer;