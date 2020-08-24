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

    if(isNaN(userName)) {
        isDisabled = false;
    }
    
    if(chatRoute) {
        return <Redirect to={`/chatroom/?username=${userName}`} />
    }

    return (
        <React.Fragment>
            <form className={classes.Registration} onSubmit={changeRoute}>
                <h1>Welcome To Party Chat</h1>
                <div className={classes.Box}>
                    <input type="text" placeholder="Enter a name" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <button disabled={isDisabled}>Send</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Registration;