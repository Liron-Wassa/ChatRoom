import { ChatContext } from '../../../contexts/ChatContext';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import Logo from '../../UI/Logo/Logo';

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
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <ul>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=music`}><i className="fas fa-users"></i>Music</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=sport`}><i className="fas fa-users"></i>Sport</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=famous`}><i className="fas fa-users"></i>Famous</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=food`}><i className="fas fa-users"></i>Food</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=women`}><i className="fas fa-users"></i>Women</NavLink></li>
                    <li><NavLink to={`/chatroom/?username=${userName}&room=men`}><i className="fas fa-users"></i>men</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default SideDrawer;

// activeClassName={classes.active}