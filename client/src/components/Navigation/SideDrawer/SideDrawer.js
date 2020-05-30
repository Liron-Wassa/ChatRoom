import { ChatContext } from '../../../contexts/ChatContext';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.module.css';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import queryString from 'query-string';
import Logo from '../../UI/Logo/Logo';

const SideDrawer = (props) => {
    
    const { show, userName, setShow } = useContext(ChatContext);

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(show){
        attachedClasses = [classes.SideDrawer];
    }    
    
    const parsed = queryString.parse(props.location.search);

    return (
        <React.Fragment>
            <BackDrop />
            <nav className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <ul>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=music`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'music' ? classes.active : null}
                        ><i className="fas fa-users"></i>Music</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=sport`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'sport' ? classes.active : null}
                        ><i className="fas fa-users"></i>Sport</NavLink></li>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=famous`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'famous' ? classes.active : null}
                        ><i className="fas fa-users"></i>Famous</NavLink></li>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=food`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'food' ? classes.active : null}
                        ><i className="fas fa-users"></i>Food</NavLink></li>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=women`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'women' ? classes.active : null}
                        ><i className="fas fa-users"></i>Women</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/chatroom/?username=${userName}&room=men`}
                            onClick={() => setShow(false)}
                            activeClassName={parsed.room === 'men' ? classes.active : null}
                        ><i className="fas fa-users"></i>men</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default withRouter(SideDrawer);