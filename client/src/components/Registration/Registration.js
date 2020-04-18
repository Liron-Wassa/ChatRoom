import { ChatContext } from '../../contexts/ChatContext';
import classes from './Registration.module.css';
import { Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

const Registration = () => {
    
    const { changeRoute, chatRoute, userName, setUserName } = useContext(ChatContext);

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    let isDisabled = true;

    if(userName) {
        isDisabled = false
    }
    
    if(chatRoute) {
        return <Redirect to={`/chatroom/?username=${userName}`} />
    }

    return (
        <React.Fragment>
            <div className={classes.Registration}>
                <h1>Welcome To Chat Room</h1>
                <div>
                    <input type="text" placeholder="Enter a name" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={changeRoute} disabled={isDisabled}>Send</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registration;